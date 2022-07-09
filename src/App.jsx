import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineCopy, AiFillCopy } from "react-icons/ai";
import useCopy from "use-copy";

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
//remove <br/>
const removeBR = (text) => {
  return text.replace(/<br>/g, "\n");
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
  //state for copying the css style

  const [cssToCopy, setCssToCopy] = useState("");
  const [copied, copy, setCopied] = useCopy(cssToCopy);

  const resultsStyleRef = useRef(null);

  //handle copy css
  const handleCopyCSS = () => {
    //copy to clipboard
    copy();

    //delay 3s then set copied to false
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  //handle shadow color opacity
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBoxShadowOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //toggle inset
  const toggleInset = (event) => {
    setBoxShadowOptions((pre) => ({
      ...pre,
      isInsetOn: !isInsetOn,
    }));
  };

  //get the state data
  const {
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    shadowColorOpacity,
    color,
    isInsetOn,
  } = boxShadowOptions;

  useEffect(() => {
    setCssToCopy(removeBR(resultsStyleRef.current.innerHTML));
  }, [boxShadowOptions]);

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
                        {offsetX}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      name="offsetX"
                      min={-100}
                      max={100}
                      onChange={handleChange}
                      value={offsetX}
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
                        {offsetY}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={-100}
                      max={100}
                      name="offsetY"
                      onChange={handleChange}
                      value={offsetY}
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
                        {blurRadius}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={0}
                      max={300}
                      name="blurRadius"
                      onChange={handleChange}
                      value={blurRadius}
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
                        {spreadRadius}px
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={-200}
                      max={200}
                      name="spreadRadius"
                      onChange={handleChange}
                      value={spreadRadius}
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
                        value={color}
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
                        {shadowColorOpacity}
                      </span>
                    </Form.Label>
                    <Form.Range
                      min={0}
                      max={1}
                      step={0.01}
                      name="shadowColorOpacity"
                      onChange={handleChange}
                      value={shadowColorOpacity}
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
                        checked={isInsetOn}
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
                    boxShadow: `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px rgba(${
                      hexToRgb(color).red
                    },${hexToRgb(color).green}, ${
                      hexToRgb(color).blue
                    },${shadowColorOpacity}) ${isInsetOn ? "inset" : ""}`,
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
                id="results-css-style"
                className="w-100 p-3 pt-5"
                style={{
                  width: "100%",
                  backgroundColor: "#272823",
                  color: "#fcfef0",
                  fontSize: 18,
                  borderRadius: ".5rem",
                  fontFamily: `'Fira Code', monospace`,
                  position: "relative",
                }}
              >
                {/* copy (save to clipboard) */}
                <>
                  {copied ? (
                    <AiFillCopy
                      title="CSS copied"
                      size={26}
                      color="#fcfef0"
                      style={{
                        zIndex: 111,
                        cursor: "pointer",
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    />
                  ) : (
                    <AiOutlineCopy
                      onClick={handleCopyCSS}
                      title="Copy CSS"
                      size={26}
                      color="#fcfef0"
                      style={{
                        zIndex: 111,
                        cursor: "pointer",
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                      }}
                    />
                  )}
                </>
                <div ref={resultsStyleRef}>
                  box-shadow: {offsetX}
                  px {offsetY}px {blurRadius}
                  px {spreadRadius}
                  px rgba({hexToRgb(color).red},{hexToRgb(color).green},
                  {hexToRgb(color).blue},{shadowColorOpacity})
                  {isInsetOn && " inset "};
                  <br />
                  -webkit-box-shadow: {offsetX}
                  px {offsetY}
                  px {blurRadius}
                  px {spreadRadius}
                  px rgba({hexToRgb(color).red},{hexToRgb(color).green},
                  {hexToRgb(color).blue},{shadowColorOpacity})
                  {isInsetOn && " inset "};
                  <br />
                  -moz-box-shadow: {offsetX}
                  px {offsetY}
                  px {blurRadius}
                  px {spreadRadius}
                  px rgba({hexToRgb(color).red},{hexToRgb(color).green},
                  {hexToRgb(color).blue},{shadowColorOpacity})
                  {isInsetOn && " inset "};
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
