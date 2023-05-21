import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Row, Statistic } from "antd";
import baseURL from "../api/baseURL";

const Graph_number = () => {
  const [userTotal, setUserTotal] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = () => {
    setIsFetching(true);
    axios
      .get(`${baseURL}/api/data`)
      .then((response) => {
        const newData = response.data;
        const parsedTotal = parseFloat(newData.userTotal);
        let count = 0;
        const intervalId = setInterval(() => {
          if (count === parsedTotal) {
            setIsFetching(false);
            clearInterval(intervalId);
          } else {
            count++;
            setUserTotal(count);
          }
        }, 1000 / parsedTotal);
      })
      .catch((error) => {
        console.error(error);
        setIsFetching(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRecharge = () => {
    fetchData();
  };

  return (
    <Row justify="center" gutter={16}>
      <Col span={12}>
        <div
          style={{
            border: "1px solid #000",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <Statistic title="이용자 수" value={userTotal} precision={2} />
          <Button
            style={{
              marginTop: 16,
            }}
            type="primary"
            onClick={handleRecharge}
            loading={isFetching}
          >
            Recharge
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Graph_number;
