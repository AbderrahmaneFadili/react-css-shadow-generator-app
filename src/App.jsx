import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";

const App = () => {
  const resultsCssCodeStyle = {
    propertyColor: "#fcfef0",
    value: "#ad80fe",
    measure: "#e8276b",
    colorValue: "#fcfef0",
  };
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
                        defaultValue="#a33"
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
          <Col md={8}>
            {/* Box */}
            <Row style={{ height: 470 }}>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  style={{
                    width: 400,
                    height: 300,
                    backgroundColor: "#a33",
                  }}
                  className="box"
                ></div>
              </div>
            </Row>
            {/* CSS Style */}
            <Row className="p-4">
              <div
                className="w-100"
                style={{
                  width: "100%",
                  height: 140,
                  backgroundColor: "#272823",
                  fontSize: 20,
                  padding: 18,
                  paddingTop: 28,
                  borderRadius: ".5rem",
                  fontFamily: `'Fira Code', monospace`,
                  position: "relative",
                }}
              >
                {/* copy (save to clipboard) */}
                <>
                  <AiOutlineCopy
                    size={26}
                    color="#fcfef0"
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                    }}
                  />
                </>
                <span
                  style={{
                    color: resultsCssCodeStyle.propertyColor,
                  }}
                >
                  box-shadow:
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.colorValue,
                  }}
                >
                  rgba(0,0,0,0.75);
                </span>
                <br />
                <span
                  style={{
                    color: resultsCssCodeStyle.propertyColor,
                  }}
                >
                  -webkit-box-shadow:
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.colorValue,
                  }}
                >
                  rgba(0,0,0,0.75);
                </span>
                <br />
                <span
                  style={{
                    color: resultsCssCodeStyle.propertyColor,
                  }}
                >
                  -moz-box-shadow:
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.value,
                  }}
                >
                  10
                </span>
                <span
                  style={{
                    color: resultsCssCodeStyle.measure,
                  }}
                >
                  px
                </span>{" "}
                <span
                  style={{
                    color: resultsCssCodeStyle.colorValue,
                  }}
                >
                  rgba(0,0,0,0.75);
                </span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
