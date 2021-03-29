import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

export const ResetPassword = ({ handleOnChange, email,  handleOnSubmit }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr></hr>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
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
          
            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Col>
        <a href="#">Loging Now</a>
      </Col>
      <Row></Row>
    </Container>
  );
};
