import logo from "./logo.svg";
import "./App.css";
import { Input, Row, Menu, Col, Button } from "antd";
import BigLogo from "./BigLogo";

function App() {
  return (
    <div>
      <header>
        <Row justify="space-around" align="middle">
          <Col>
            <h2 style={{ margin: "0" }}>
              <a href="/" id="logo">
                <img src={logo} alt="logo" style={{ width: "32px" }} />
                Ant Design
              </a>
            </h2>
          </Col>
          <Col>
            <Input placeholder="Search"></Input>
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item>Design</Menu.Item>
              <Menu.Item>Docs</Menu.Item>
              <Menu.Item>Components</Menu.Item>
              <Menu.Item>Resources</Menu.Item>
            </Menu>
          </Col>
          {/* <Col>
            <Select defaultValue="foo" style={{ width: 120 }}>
              <Option value="foo">Foo</Option>
              <Option value="bar">Bar</Option>
            </Select>
          </Col> */}
        </Row>
      </header>
      <Row style={{ marginTop: "130px" }}>
        <BigLogo />
      </Row>
      <Row justify="center" style={{ margin: "64px" }}>
        <Button shape="round" type="primary" style={{ marginRight: "8px" }}>
          Getting Started
        </Button>
        <Button shape="round">Design Language</Button>
      </Row>
    </div>
  );
}

export default App;
