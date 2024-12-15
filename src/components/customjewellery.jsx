import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";

function Customjewellery() {
  return (
    <Container fluid className="p-0 my-4">
      <Card className="bg-dark text-white border-0 rounded-0">
        <Card.Img
          src="/src/assets/images/homebanner-custom.avif"
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-start ml-5">
          <Card.Title>Custom Design Jewelry</Card.Title>
          <Card.Text>
            Stand out from the crowd with our custom jewelry, made with
            attention to detail and passion.
          </Card.Text>
          <Card.Text>
            <Button variant="dark" className="rounded-0 border ring-button">
              <span>
                START DESIGN NOW <FaArrowRight className="ml-4" />
              </span>
            </Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default Customjewellery
