import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

const App = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          {/* Title  */}
          <Col>
            <h1 className="text-center">Box Shadow CSS Generator</h1>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row>
          {/* Box Shadow Options */}
          <Col md={4}>
            <Card>
              <Card.Header>
                <b>Box Shadow Options</b>
              </Card.Header>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  {/* Horizontal Shadow */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Horizontal Shadow Length</span>
                      <span className="font-weight-bold text-primary">
                        10px
                      </span>
                    </Form.Label>
                    <Form.Range className="w-100" />
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* Vertical Shadow */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Vertical Shadow Length</span>
                      <span className="font-weight-bold text-primary">
                        10px
                      </span>
                    </Form.Label>
                    <Form.Range className="w-100" />
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* Blur Radius */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Blur Radius</span>
                      <span className="font-weight-bold text-primary">
                        10px
                      </span>
                    </Form.Label>
                    <Form.Range className="w-100" />
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* Spread Radius */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Spread Radius</span>
                      <span className="font-weight-bold text-primary">
                        10px
                      </span>
                    </Form.Label>
                    <Form.Range className="w-100" />
                  </Form.Group>
                </ListGroup.Item>

                <ListGroup.Item>
                  {/* Shadow Color */}
                  <Form.Group className="mb-3">
                    <div className="d-flex justify-content-between">
                      <Form.Label>Shadow Color</Form.Label>
                      <Form.Control
                        style={{ width: 100 }}
                        type="color"
                        id="shadow-color"
                        name="shadow-color"
                        defaultValue="#000"
                        title="Shadow Color"
                      />
                    </div>
                  </Form.Group>
                </ListGroup.Item>

                <ListGroup.Item>
                  {/* Shadow Color Opacity */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Shadow Color Opacity</span>
                      <span className="font-weight-bold text-primary">
                        10px
                      </span>
                    </Form.Label>
                    <Form.Range className="w-100" />
                  </Form.Group>
                </ListGroup.Item>

                <ListGroup.Item>
                  {/* Inset */}
                  <Form.Group>
                    <div className="d-flex justify-content-between">
                      <Form.Label>
                        <b>Inset</b>
                      </Form.Label>
                      <Form.Check type="switch" id="custom-switch" />
                    </div>
                  </Form.Group>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          {/* Results */}
          <Col md={8}>Results</Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
