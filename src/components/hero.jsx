import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <Container fluid className="hero p-0">
      <Row className="g-0">
        <Col md={6}>
          <Card className="bg-dark text-white border-0 rounded-0">
            <Card.Img
              src="/src/assets/images/home-men.avif"
              alt="Card image"
              height="400"
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Row>
                <Col md={6}>
                  <Card.Title className="text-start fw-bold col-8 fs-4">
                    MEN'S COLLECTION
                  </Card.Title>
                </Col>
                <Col md={6}>
                  <Card.Text className="text-end">
                    <Button variant="primary" className="ms-2 rounded-0">
                      <span className="gap-4">
                        Shop Now <FaArrowRight />
                      </span>
                    </Button>
                  </Card.Text>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-white border-0 rounded-0 ">
            <Card.Img
              src="/src/assets/images/home-women.avif"
              alt="Card image"
              height="400"
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Row>
                <Col md={6}>
                  <Card.Title className="text-start fw-bold col-8 fs-4">
                    WOMEN'S COLLECTION
                  </Card.Title>
                </Col>
                <Col md={6}>
                  <Card.Text className="text-end">
                    <Button variant="primary" className="rounded-0 gap-4">
                      <span className="gap-4">
                        Shop Now <FaArrowRight />
                      </span>
                    </Button>
                  </Card.Text>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;