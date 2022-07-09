import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Container style={{ marginTop: 10 }}>
      <Row className="my-3 justify-content-md-center">
        <Col md={6}>
          <h1 className="display-4">Counter </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Button
            size="lg"
            onClick={(event) => setCount(count + 1)}
            variant="primary"
          >
            Count {count}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
