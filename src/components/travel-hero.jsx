import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TravelHeroSection() {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="p-0 m-0">
          <Col className="p-0">
            <img
              src="/src/assets/images/result_banner-travel-cases.webp"
              alt="Travel Cases Collection"
              className="img-fluid hero-image"
            />
          </Col>
        </Row>
      </Container>

      <Container className="HeroSection">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="my-4 text-small">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">ICEBOX</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              TRAVEL CASES
            </li>
          </ol>
        </nav>

        {/* Heading */}
        <h4 className="fw-bold">TRAVEL CASES COLLECTION</h4>

        <div>
          <Row className="Men-DropDown">
            {/* Left side*/}
            <Col xs={12} md={8} className="d-flex px-0">
              <div className="dropdown me-2">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Travel cases Subcategories
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown me-2">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Price Range
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose Color
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton4"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Right side*/}
            <Col xs={12} md={4} className="text-md-end mt-2 mt-md-0">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton5"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default TravelHeroSection;
