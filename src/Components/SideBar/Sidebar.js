import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
const Sidebar = () => {
  return (
    <>
      <Container>
        <h3 className="my-2 text-center">DigiInsti</h3>
      </Container>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Sidebar;
