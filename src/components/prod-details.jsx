import React, { useState } from "react";

function ProductDetails({
  title,
  name,
  price,
  images,
  sizehead,
  sizes,
  showAcc2Class,
  showAcc1Class,
  showAcc3Class,
}) {
  const [activeButton, setActiveButton] = useState(sizes[0]);

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  const handleAddToCart = () => {
    console.log("Product added to cart:");
    console.log("Name:", name);
    console.log("Price:", price);
  };

  return (
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb" className="my-4 text-small">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">RINGS</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              FASHION RINGS
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 col-md-7">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product image ${index + 1}`}
              className="img-fluid mb-3"
            />
          ))}
        </div>
        <div className="col-12 col-md-5">
          <p className="breadcrumb mb-1">{title}</p>
          <h4 className="fw-bold">{name}</h4>
          <p className="breadcrumb">Color - Yellow</p>
          <p className="fw-bold fs-5">${price}</p>
          <button className="instock">
            <span
              class="spinner-grow text-success small-spinner"
              role="status"
            ></span>
            <span className="ml-2">In Stock</span>
          </button>
          <div className="my-4 text-small">
            <h6 className="fw-bold text-small">
              This Icebox Baguette & Round Ring is made of 14K Yellow gold.
            </h6>
            <p>
              This piece is handcrafted and manufactured by Icebox. All of the
              diamonds are hand-set by a master diamond setter in the highest
              quality craftsmanship. This piece is made of solid gold.
            </p>
          </div>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            {/* First Accordion Item */}
            <div className={`${showAcc1Class ? "acc-1" : "d-none"}`}>
              <div className="accordion-item acc-1">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button text-small fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    DIAMONDS
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body px-0 text-small">
                    <button className="fw-bold active">VS</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Accordion Item */}
            <div className={`${showAcc2Class ? "acc-2" : "d-none"}`}>
              <div className="accordion-item mt-2 acc-2">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button text-small fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    {sizehead}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body px-0">
                    <div className="container-fluid p-0">
                      <div className="row">
                        <div className="col-auto d-flex flex-wrap gap-2 text-small">
                          {sizes.map((value) => (
                            <button
                              key={value}
                              className={`mt-2 fw-bold ${
                                activeButton === value ? "active" : ""
                              }`}
                              onClick={() => handleButtonClick(value)}
                            >
                              {value}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Accordion Item */}
            <div className={`${showAcc3Class ? "acc-3" : "d-none"}`}>
              <div className="accordion-item mt-2 acc-3">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button text-small fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Description
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body px-0">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Enter description here..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid gap-1">
            <button
              type="button"
              className="btn btn-dark mb-2 rounded-0 text-small fw-bold btn-cart"
              onClick={handleAddToCart}
            >
              ADD TO CART ${price}
            </button>
            <button
              type="button"
              className="btn btn-light mb-2 rounded-0 text-small fw-bold btn-wa"
            >
              TALK NOW ON WHATSAPP
            </button>
          </div>

          <div className="policy-section mt-2">
            <h5>Shipping & Returns Policy</h5>
            <p className="text-small">
              Item design & details may vary slightly from the provided image.
            </p>
            <p className="text-small">
              Icebox Diamonds & Watches does not accept returns or issue refunds
              for any reason.
            </p>
            <p className="text-small">
              We do allow <strong>one (1) exchange</strong> within{" "}
              <strong>14 days</strong> of the purchase date.
            </p>

            <h5>Questions? Schedule a Call.</h5>
            <p className="text-small">
              We'll send you a text to confirm a call.
            </p>
          </div>
          <div className="schedule-call">
            <form action="#">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label for="datetime">Date & Time</label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  required
                />
              </div>

              <button type="submit">Schedule a Call</button>
            </form>

            <p className="call-now">
              Call Now: <a href="tel:4048420266">404-842-0266</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
