import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/DummyTikets.json";
import { PageBreadCrumb } from "../../components/breadcrumb/Breadcrumb.comp";
export const Dashboard = ({}) => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets :50</div>
          <div>Pending tickets :50</div>
        </Col>
      </Row>
      <Row>
        <Col className="  mt-2">Recently added tickets</Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="recent-table">
          <TicketTable tickets={tickets} />{" "}
        </Col>
      </Row>
    </Container>
  );
};
