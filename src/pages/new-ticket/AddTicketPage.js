import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { PageBreadCrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp.js";
export const AddTicketPage = () => {
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadCrumb page="New Ticket" />
          </Col>
        </Row>

        <Row>
          <Col>
           <AddTicketForm/>
          </Col>
        </Row>
      </Container>
    );
}
