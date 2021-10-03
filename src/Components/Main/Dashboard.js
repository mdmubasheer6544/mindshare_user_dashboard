import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Select,
  Table,
} from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm={3}>
          <h5>Master Data: Staff</h5>
        </Col>
        <Col xs={6}></Col>
        <Col sm={3}>
          <Form.Group></Form.Group>
          {/* <Form.Select size="sm">
              <option>Small select</option>
            </Form.Select> */}
        </Col>
      </Row>

      <Row className="py-3">
        <Col sm={3}>
          <Button variant="primary" size="sm" className="mx-2">
            Add New +
          </Button>
          <Button variant="primary" size="sm" className="mx-2">
            Upload CSV
          </Button>
        </Col>
        <Col xs={6}></Col>
        <Col sm={3}>
          <Form.Control size="sm" type="text" placeholder="Search here..." />
        </Col>
      </Row>
      <Row>
        <Container>
          <Table responsive className="text-center">
            <thead className="text-muted">
              <tr>
                <th>Dashboard</th>
                <th>Role</th>
                <th>Emp.Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of joining</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Total Staff:32/50</th>
              </tr>
            </thead>
            <tbody>

              <tr className="my-2">
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                  <Button variant="primary" size="sm" className="mx-2">
                    View profile
                  </Button>
                </td>
     
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>4</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>5</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>6</td>
                {Array.from({ length: 8 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Container>
      </Row>
    </Container>
  );
};

export default Dashboard;
