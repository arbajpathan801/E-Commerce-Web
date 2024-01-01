import React, { useState } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";

const Register = () => {
  const [state, setState] = useState({
    user: { user: "", email: "", password: "" },
  });

  const updateInput = (e) => {
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: e.target.value },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}>
          <Card className="shadow-lg">
            <Card.Header style={{ backgroundColor: "#fd7e14" }}>
              {" "}
              Register{" "}
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Control
                    name="username"
                    onChange={updateInput}
                    type="text"
                    placeholder="Username"
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    name="email"
                    onChange={updateInput}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Control
                    name="password"
                    onChange={updateInput}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Button
                    onClick={onSubmit}
                    style={{ backgroundColor: "#fd7e14", color:'#212529'}}
                    type="submit"
                  >
                    Register
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
