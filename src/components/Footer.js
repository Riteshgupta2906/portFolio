import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row style={{ justifyContent: "center" }}>
        <Col md="4" className="footer-copywright">
          <h3>Made With ❤️ by Ritesh</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
