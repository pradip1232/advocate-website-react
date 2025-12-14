import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { loginPageData } from './loginPageData';
import './index.scss';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (email === loginPageData.credentials.email && password === loginPageData.credentials.password) {
      // Store admin data in localStorage
      localStorage.setItem("admin", JSON.stringify({ email }));
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <Container fluid className="login-page__container">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={4}>
            <Card className="login-page__card">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <h2 className="login-page__title">{loginPageData.title}</h2>
                  <p className="login-page__subtitle">{loginPageData.subtitle}</p>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 login-page__submit-btn"
                  >
                    {loginPageData.submitText}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;