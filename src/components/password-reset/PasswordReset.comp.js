import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

export const ResetPassword = ({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr></hr>
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Button type="submit">Reset Paaword</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Col>
        <a href="#" onClick={() => formSwitcher("login")}>
          Login
        </a>
      </Col>
      <Row></Row>
    </Container>
  );
};
