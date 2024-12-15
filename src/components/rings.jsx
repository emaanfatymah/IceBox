import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";

function Rings() {
  const cardData = [
    { id: 1, image: "/src/assets/images/ring.jfif", title: "ROUND" },
    { id: 2, image: "/src/assets/images/ring.jfif", title: "OVAL" },
    { id: 3, image: "/src/assets/images/ring.jfif", title: "PRINCESS" },
    { id: 4, image: "/src/assets/images/ring.jfif", title: "EMERALD" },
    { id: 5, image: "/src/assets/images/ring.jfif", title: "PEAR" },
    { id: 6, image: "/src/assets/images/ring.jfif", title: "WEDDING" },
  ];

  return (
    <div>
      <Container fluid className="hero p-0">
        <Row className="g-0">
          <Col md={12}>
            <Card className="bg-dark text-white border-0 rounded-0">
              <Card.Img
                src="/src/assets/images/homebanner-engagement.avif"
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-start ms-5">
                <Card.Title>Engagement & Wedding</Card.Title>
                <Card.Text>
                  Complete your look with our exquisite jewelry accessories at
                  Icebox.
                </Card.Text>
                <Card.Text>
                  <Button
                    variant="dark"
                    className="rounded-0 border ring-button"
                  >
                    <span>
                      SHOP ALL <FaArrowRight className="ml-4" />
                    </span>
                  </Button>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={12} className="centered-cards-container">
            <div className="row justify-content-center">
              {cardData.map((card) => (
                <div className="col-auto" key={card.id}>
                  <div className="card border-0 rounded-0 mb-2">
                    <img
                      src={card.image}
                      className="card-img-top rounded-0"
                      alt={card.title}
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="card-title d-flex justify-content-center fw-bold">
                      {card.title}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rings
