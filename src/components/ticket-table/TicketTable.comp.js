import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped borderedhover hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Subjects</th>
          <th>Opened Table</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.status}</td>
              <td>{row.subject}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No tickets to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
