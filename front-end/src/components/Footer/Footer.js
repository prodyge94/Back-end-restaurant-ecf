import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <footer className="py-3">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Horaires d'ouverture</h3>
            <p>
              Lundi - Vendredi : 11h30 - 15h00 et 18h00 - 00h00 <br />
              Samedi : 11h00 - 15h00 et 18h30 - 00h30 <br />
              Dimanche : 19h00 - 00h00
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Adresse et contact</h3>
            <p>
              chamberry
              <br />
              125 rue de jspquoi <br />
              Téléphone : 0123456789
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>A propos du site</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
