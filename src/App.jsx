import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";

//hex to rgb
const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : null;
};

const App = () => {
  //box shadow options state
  const [boxShadowOptions, setBoxShadowOptions] = useState({
    offsetX: 10,
    offsetY: 10,
    blurRadius: 10,
    spreadRadius: 10,
    shadowColorOpacity: 0.5,
    color: "#000000",
    isInsetOn: false,
  });

  //css code style for results object
  const resultsCssCodeStyle = {
    propertyColor: "#fcfef0",
    value: "#ad80fe",
    measure: "#e8276b",
    colorValue: "#fcfef0",
  };

  //handle shadow color opacity
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBoxShadowOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleInset = (event) => {
    setBoxShadowOptions((pre) => ({
      ...pre,
      isInsetOn: !boxShadowOptions.isInsetOn,
    }));
  };

  console.log(boxShadowOptions);
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
          <Col lg={4}>
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
                        {boxShadowOptions.offsetX}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      name="offsetX"
                      min={-100}
                      max={100}
                      onChange={handleChange}
                      value={boxShadowOptions.offsetX}
                      className="w-100"
                    />
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* Vertical Shadow */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Vertical Shadow Length</span>
                      <span className="font-weight-bold text-primary">
                        {boxShadowOptions.offsetY}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={-100}
                      max={100}
                      name="offsetY"
                      onChange={handleChange}
                      value={boxShadowOptions.offsetY}
                      className="w-100"
                    />
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* Blur Radius */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Blur Radius</span>
                      <span className="font-weight-bold text-primary">
                        {boxShadowOptions.blurRadius}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={0}
                      max={300}
                      name="blurRadius"
                      onChange={handleChange}
                      value={boxShadowOptions.blurRadius}
                      className="w-100"
                    />
                  </Form.Group>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* Spread Radius */}
                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex justify-content-between">
                      <span>Spread Radius</span>
                      <span className="font-weight-bold text-primary">
                        {boxShadowOptions.spreadRadius}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={-200}
                      max={200}
                      name="spreadRadius"
                      onChange={handleChange}
                      value={boxShadowOptions.spreadRadius}
                      className="w-100"
                    />
                  </Form.Group>
                </ListGroup.Item>

                <ListGroup.Item>
                  {/* Shadow Color */}
                  <Form.Group className="mb-3">
                    <div className="d-flex justify-content-between">
                      <Form.Label>Shadow Color</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        style={{ width: 100 }}
                        type="color"
                        name="color"
                        title="Shadow Color"
                        value={boxShadowOptions.color}
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
                        {boxShadowOptions.shadowColorOpacity}
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={0}
                      max={1}
                      step={0.01}
                      name="shadowColorOpacity"
                      onChange={handleChange}
                      value={boxShadowOptions.shadowColorOpacity}
                      className="w-100"
                    />
                  </Form.Group>
                </ListGroup.Item>

                <ListGroup.Item>
                  {/* Inset */}
                  <Form.Group>
                    <div className="d-flex justify-content-between">
                      <Form.Label>
                        <b>Inset</b>
                      </Form.Label>
                      <Form.Check
                        onChange={toggleInset}
                        checked={boxShadowOptions.isInsetOn}
                        type="switch"
                        name="isInsetOn"
                      />
                    </div>
                  </Form.Group>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          {/* Results */}
          <Col lg={8}>
            {/* Box */}
            <Row style={{ height: 470 }}>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  style={{
                    width: 400,
                    height: 300,
                    backgroundColor: "#0d6efd",
                  }}
                  className="box"
                ></div>
              </div>
            </Row>
            {/* Results  CSS Style */}
            <Row className="p-4">
              <div
                className="w-100 p-3 pt-5"
                style={{
                  width: "100%",
                  backgroundColor: "#272823",
                  fontSize: 18,
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
                  rgba({hexToRgb(boxShadowOptions.color).red},
                  {hexToRgb(boxShadowOptions.color).green},
                  {hexToRgb(boxShadowOptions.color).blue},
                  {boxShadowOptions.shadowColorOpacity});
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
                  rgba({hexToRgb(boxShadowOptions.color).red},
                  {hexToRgb(boxShadowOptions.color).green},
                  {hexToRgb(boxShadowOptions.color).blue},
                  {boxShadowOptions.shadowColorOpacity});
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
                  rgba({hexToRgb(boxShadowOptions.color).red},
                  {hexToRgb(boxShadowOptions.color).green},
                  {hexToRgb(boxShadowOptions.color).blue},
                  {boxShadowOptions.shadowColorOpacity});
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
