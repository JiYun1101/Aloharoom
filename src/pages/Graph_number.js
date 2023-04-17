import { Button, Col, Row, Statistic } from "antd";

const App = () => (
  <Row justify="center" gutter={16}>
    <Col span={12}>
      <div
        style={{
          border: "1px solid #000",
          borderRadius: 8, // 둥근 모서리 적용
          padding: 16,
        }}
      >
        <Statistic title="이용자 수" value={112893} precision={2} />
        <Button
          style={{
            marginTop: 16,
          }}
          type="primary"
        >
          Recharge
        </Button>
      </div>
    </Col>
  </Row>
);

export default App;
