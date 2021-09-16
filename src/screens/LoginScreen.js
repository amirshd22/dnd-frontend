import React, { useState, useEffect } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../Components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
function LoginScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <Card className="bg-dark m-auto text-light text-end">
        <Card.Header className="text-center fs-2">D</Card.Header>
        <Card.Body>
          {loading && <Loader />}
          {error && <Message variant="danger">{error}</Message>}
          <div className="container">
            <p className="text-center mb-4 fs-3 ">ورود به دی ان دی استور</p>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Label>
                  <small>ایمیل خود را وارد کنید</small>
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  className="text-end rounded border"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>
                  <small>رمز عبور</small>
                </Form.Label>
                <Form.Control
                  required
                  className="text-end rounded border"
                  type="password"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <div className="text-center">
                <Button
                  type="submit"
                  variant="outline-light"
                  className="mt-3 rounded w-50"
                >
                  ورود به سایت
                </Button>
              </div>
            </Form>
            <Row className="py-3 text-center">
              <Col>
                <small>کاربر جدید هستید؟</small>{" "}
                <Link
                  className="text-light"
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  ثبت نام
                </Link>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </FormContainer>
  );
}

export default LoginScreen;
