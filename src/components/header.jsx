import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const [searchVisible, setSearchVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle search input visibility
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <nav className="navbar-container container-fluid">
        {/* First Row */}
        <div className="first-row row align-items-center mx-4">
          <div className="search-location col d-flex align-items-start">
            <div className="menu-icon m-2 d-sm-none">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <a href="#" className="search m-2 fs-5" onClick={toggleSearch}>
              <IoSearch />
            </a>
            <Link to="#" className="location m-2 text-decoration-none fs-5">
              <HiOutlineLocationMarker />{" "}
              <span className="fs-6">Our Locations</span>
            </Link>
          </div>

          <Link to="/" className="logo col d-flex justify-content-center">
            <img src="/src/assets/images/logoib.png" alt="Logo" />
          </Link>

          <div className="user-cart col d-flex align-items-end justify-content-end">
            <Link
              to="#"
              className="user m-2 fs-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FaRegCircleUser />
            </Link>
            <Link
              to="#"
              className="cart m-2 fs-5"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <RiShoppingBagLine />
            </Link>
          </div>
        </div>

        {/* Search Input Field */}
        {searchVisible && (
          <div className="search-bar row justify-content-center p-3">
            <div className="col-6 position-relative">
              <input
                type="text"
                placeholder="Search..."
                className="form-control search-input"
              />
              <button className="btn btn-light text-dark fw-bold">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Second Row */}
        <div className="second-row row justify-content-center text-center">
          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/men"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              MEN'S
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/men/category1" className="dropdown-item">
                  Shop All
                </Link>
                <Link to="/men/category2" className="dropdown-item">
                  Best Under $1500
                </Link>
                <Link to="/men/category3" className="dropdown-item">
                  Pendants
                </Link>
                <Link to="/men/category4" className="dropdown-item">
                  Gold Chains
                </Link>
                <Link to="/men/category5" className="dropdown-item">
                  Earrings
                </Link>
                <Link to="/men/category6" className="dropdown-item">
                  Rings
                </Link>
                <Link to="/men/category7" className="dropdown-item">
                  Bracelets
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/women"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              WOMEN'S
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/women/category1" className="dropdown-item">
                  Shop All
                </Link>
                <Link to="/women/category2" className="dropdown-item">
                  Best Under $1500
                </Link>
                <Link to="/women/category3" className="dropdown-item">
                  Pendants
                </Link>
                <Link to="/women/category4" className="dropdown-item">
                  Gold Chains
                </Link>
                <Link to="/women/category5" className="dropdown-item">
                  Earrings
                </Link>
                <Link to="/women/category6" className="dropdown-item">
                  Rings
                </Link>
                <Link to="/women/category7" className="dropdown-item">
                  Bracelets
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/goldchains"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              GOLD CHAINS
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/goldchains/category1" className="dropdown-item">
                  Category 1
                </Link>
                <Link to="/goldchains/category2" className="dropdown-item">
                  Category 2
                </Link>
                <Link to="/goldchains/category3" className="dropdown-item">
                  Category 3
                </Link>
                <Link to="/goldchains/category4" className="dropdown-item">
                  Category 4
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/engagement"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              ENGAGEMENT
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/enagagement/category1" className="dropdown-item">
                  Category 1
                </Link>
                <Link to="/enagagement/category2" className="dropdown-item">
                  Category 2
                </Link>
                <Link to="/enagagement/category3" className="dropdown-item">
                  Category 3
                </Link>
                <Link to="/enagagement/category4" className="dropdown-item">
                  Category 4
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/travelcases"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              TRAVEL CASES
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/travelcases/category1" className="dropdown-item">
                  Category 1
                </Link>
                <Link to="/travelcases/category2" className="dropdown-item">
                  Category 2
                </Link>
                <Link to="/travelcases/category3" className="dropdown-item">
                  Category 3
                </Link>
                <Link to="/travelcases/category4" className="dropdown-item">
                  Category 4
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/watches"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              WATCHES
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/watches/category1" className="dropdown-item">
                  Rolex
                </Link>
                <Link to="/watches/category2" className="dropdown-item">
                  Audemars Piguet
                </Link>
                <Link to="/watches/category3" className="dropdown-item">
                  Patak Philippe
                </Link>
                <Link to="/watches/category4" className="dropdown-item">
                  Cartier
                </Link>
                <Link to="/watches/category5" className="dropdown-item">
                  Hublot
                </Link>
                <Link to="/watches/category6" className="dropdown-item">
                  Other Brands
                </Link>
                <Link to="/watches/category7" className="dropdown-item">
                  Bustdowns
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/custom"
              className="nav-link"
              onClick={() => setShowDropdown(false)}
            >
              CUSTOM
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/custom/category1" className="dropdown-item">
                  Category 1
                </Link>
                <Link to="/custom/category2" className="dropdown-item">
                  Category 2
                </Link>
                <Link to="/custom/category3" className="dropdown-item">
                  Category 3
                </Link>
                <Link to="/custom/category4" className="dropdown-item">
                  Category 4
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown col-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/order"
              className="nav-link fw-bold"
              onClick={() => setShowDropdown(false)}
            >
              MADE TO ORDER
            </Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/order/category1" className="dropdown-item">
                  Category 1
                </Link>
                <Link to="/order/category2" className="dropdown-item">
                  Category 2
                </Link>
                <Link to="/order/category3" className="dropdown-item">
                  Category 3
                </Link>
                <Link to="/order/category4" className="dropdown-item">
                  Category 4
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/*Modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0 px-5">
              <h4 className="modal-title" id="exampleModalLabel">
                Login to Icebox with OTP
              </h4>
              <p>Enter your phone number and we'll send you a 4-digit code.</p>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label"></label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="d-grid gap-1 ">
                <button type="button" className="btn btn-dark mb-2">
                  SEND OTP
                </button>
                <button type="button" className="btn btn-light mb-5">
                  Sign in with email
                </button>
              </div>
            </div>
            <div className="modal-footer px-4">
              <p className="fw-bold col">Don't have an icebox account? </p>
              <button type="button" className="btn btn-outline-dark">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Offcanvas*/}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h6 id="offcanvasRightLabel">SHOPPING CART ({cart.length})</h6>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h5 className="mt-4">YOUR CART IS EMPTY</h5>
          <p>Add more diamonds to your life!</p>
          <button className="btn btn-primary rounded-0 mt-2">
            <span className="gap-4">
              START SHOPPING <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="offcanvas-footer d-grid gap-2">
          <button className="btn btn-dark rounded-0 m-2">Go to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Header;
