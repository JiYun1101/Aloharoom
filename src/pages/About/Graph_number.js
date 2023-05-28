import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Row, Statistic } from "antd";
import baseURL from "../api/baseURL";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const TextWrap = styled.section`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-top: 10rem;
`;

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
    <Row justify="center" gutter={36}>
      <Col span={22}>
        <Row justify="center">
          <Col>
            {/* <TextWrap>지금 알로하룸을 이용중인 사람의 수!</TextWrap> */}
            <TextWrap />
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Statistic
              style={{
                marginTop: "-1rem",
                marginBottom: "3rem",
                color: "white",
              }}
              valueStyle={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "700",
              }}
              value={userTotal}
              precision={2}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Button
              style={{
                marginTop: "1rem",
                color: "#85afe1",
                fontSize: "1.1rem",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleRecharge}
              loading={isFetching}
            >
              <SearchOutlined
                style={{ marginRight: "0.5rem", marginLeft: "-0.5rem" }}
              />
              지금 확인하기
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Graph_number;
