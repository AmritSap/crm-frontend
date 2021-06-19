import React from "react";
import { Form, Jumbotron, Button, Row } from "react-bootstrap";

export const AddTicketForm = ({ handleOnChange, handleOnSubmit }) => {
  return (
    <Jumbotron>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            name="subject"
            //   value={email}
            onChange={handleOnChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="date"
            name="issueDate"
            onChange={handleOnChange}
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};
