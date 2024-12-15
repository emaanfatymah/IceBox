import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductDetails from "../components/prod-details";
import { dummyData } from "../dummydata";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import VisitIcebox from "../components/visit-icebox";

const EarringsDetailPage = () => {
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

  return (
    <>
      <Header />
      <ProductDetails
        title="Hoop Earrings"
        name="Wide Three Row Hoop Diamond Earrings 14k Solid Gold 0.33ctw"
        price="1,200"
        sizehead="SIZE"
      />
      <div>
        <h5 className="ml-4 fw-bold">You may also like</h5>
        {dummyData
          .filter((elm) => elm.category === "earrings")
          .map((elm) => (
            <Container fluid className="p-0 my-4" key={elm.id}>
              <Slider {...settings} className="m-4">
                {elm.data.map((w) => (
                  <Link key={w.id} className="text-decoration-none">
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
      </div>
      <VisitIcebox/>
      <Footer />
    </>
  );
};

export default EarringsDetailPage;
