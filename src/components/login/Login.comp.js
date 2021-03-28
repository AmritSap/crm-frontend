import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

export const LoginForm= ({handleOnChange,email,pass}) => {


    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Client login</h1>
            <hr></hr>
            <Form>
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
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={pass}
                  onChange={handleOnChange}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Col>
          <a href="#">Forgot Password?</a>
        </Col>
        <Row></Row>
      </Container>
    );
}
