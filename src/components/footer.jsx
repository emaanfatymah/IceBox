import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdCall } from "react-icons/md";


function Footer() {
  return (
    <footer className=" text-dark pt-5 Footer">
      <div className="container-fluid">
        <div className="row m-4 list-container">
          <div className="col-md-3 mb-4">
            <a href="">
              <img
                src="/src/assets/images/logoib.png"
                alt=""
                height="32px"
                max-width="130px;"
              />
            </a>
            <p className="mt-4">
              3255 Peachtree Rd NE,
              <br />
              Suite #2
              <br />
              Atlanta, GA 30305, USA
            </p>
          </div>
          <div className="col-md-3 mb-4 row " style={{ height: "180px" }}>
            <h6 className="mb-4 fw-bold">SHOP BY PRODUCTS</h6>
            <ul className="list-unstyled col">
              <li>Pendants</li>
              <li>Gold Chains</li>
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Rings</li>
            </ul>
            <ul className="list-unstyled col">
              <li>Bracelets</li>
              <li>Bustdowns</li>
              <li>Custom</li>
              <li>Watches</li>
              <li>Travel Cases</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="mb-4 fw-bold">MORE PAGES</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Return & Exchange Policy</li>
              <li>Frequently Asked Questions</li>
              <li>Careers</li>
              <li>Catalog</li>
              <li>Financing</li>
              <li>Locations</li>
              <li>About Us</li>
              <li>My Account</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="mb-4 fw-bold">CALL NOW</h6>
            <p>
              VIA PHONE
              <br />
              <a href="tel:4048420266">404-842-0266</a>
              <br />
              <br />
              VIA EMAIL
              <br />
              <a href="mailto:sales@icebox.com">sales@icebox.com</a>
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center text-center border-bottom border-top">
          <div className="social-icons my-3">
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <MdOutlineFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="row m-4 mb-0">
          <p className="col-6 ">
            Currency: <strong>$ USD</strong>
          </p>
          <p className="col-6 d-flex align-items-end justify-content-end">
            Icebox.com, 2024 ©. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
