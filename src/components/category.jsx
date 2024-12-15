import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { dummyData } from "../dummydata";

function Category() {
  var settings = {
    dots: false,
    autoplay: "true",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(dummyData, "dummyData");

  return (
    <>
      {dummyData.map((elm) => (
        <Container fluid className="p-0 my-4" key={elm.id}>
          <Row className="g-0">
            <Col md={7}>
              <Card className="bg-dark text-white border-0 rounded-0">
                <Card.Img src={elm?.imageSrc} alt="Card image" />
              </Card>
            </Col>
            <Col
              md={4}
              className="d-flex flex-column justify-content-center align-items-start"
            >
              <Card.Title className="text-black ml-5">{elm?.title}</Card.Title>
              <Card.Text className="text-black ml-5">
                {elm?.description}
              </Card.Text>
              <Card.Text>
                <Button
                  variant="primary"
                  className="rounded-0 ml-5 custom-button"
                >
                  <span>
                    {elm?.buttonText} <FaArrowRight className="ml-3" />
                  </span>
                </Button>
              </Card.Text>
            </Col>
          </Row>

          <Slider {...settings} className="m-4">
            {elm?.data.map((w) => (
              <Link
                to={`/productdetails/${elm.title}/${w.id}`}
                key={w.id}
                className="text-decoration-none"
              >
                <div className="card bg-white text-white rounded-0 border-0 cursor-pointer">
                  <img
                    src={w.image}
                    height="350"
                    width="200"
                    className="card-img rounded-0"
                    alt="Card background"
                  />
                  <div className="bg-white text-black">
                    <h6>{w.gender}</h6>
                    <p>{w.desc}</p>
                    <h5>{w.price}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </Container>
      ))}
    </>
  );
}

export default Category;
