import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ "font-size": "2rem", padding: "10px 30px" }}
          >
            Add new ticket
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
