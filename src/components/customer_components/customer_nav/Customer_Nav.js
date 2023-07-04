import React, {useContext, useState} from "react";
import "./Customer_Nav.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faMagnifyingGlass,
  faRightFromBracket,
  faRightToBracket,
  faUserTieHair,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/Fashion Logo_White Version.png";
import logo2 from "../../../images/logo.png";
import {Link, useLocation} from "react-router-dom";
import {Button, Collapse} from "react-bootstrap";
import {AuthContext} from "../../../Contexts/UserContext";
import profileImg from "../../../images/vector-icon-user-avatar-web-site-mobile-app-man-face-flat-style-social-network-profile-45836554.webp";

const Customer_Nav = props => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [navToggle, setNavToggle] = useState(false);
  const toggle = () => {
    props.onToggle();
    setNavToggle(!navToggle);
  };
  const {user, logOut} = useContext(AuthContext);

  return (
    <div className="bg-primary fixed-top  ">
      <div
        className={`navber  d-flex  align-items-center justify-content-between  ${
          location.pathname.includes("/admin") ? "px-2" : "container-lg  px-4"
        }`}
      >
        <div className={"d-flex align-items-center"}>
          <FontAwesomeIcon
            className={`toggle_icon  ${
              location.pathname.includes("/admin") ? "" : "d-none"
            }`}
            onClick={toggle}
            icon={faBars}
          />

          <div className="logo">
            <Link to="/">
              <img src={logo} className="img-fluid d-none d-md-block" alt="" />
              <img
                src={logo2}
                className="img-fluid d-block d-md-none ps-2"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="search-bar ">
          <form
            className="search-form d-flex  align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="login-cart-profile d-flex align-items-center  text-light fs-4">
          <li className="d-lg-none  ">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </li>
          <li>
            <Link className="text-light" to="/cart">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </li>
          <li className="nav_info">
            {!user ? (
              <Link className="text-light" to="/login">
                <FontAwesomeIcon icon={faRightToBracket} />
              </Link>
            ) : (
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon
                    onClick={logOut}
                    className="ms-3"
                    icon={faRightFromBracket}
                  />
                </div>
                <div>
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="" />
                  ) : (
                    <img src={profileImg} alt="" />
                  )}
                </div>
                {user.displayName ? (
                  <div className="ps-2 fs-5">{user.displayName}</div>
                ) : (
                  <div className="ps-2 fs-5">{user.email}</div>
                )}
              </div>
            )}
          </li>
        </div>
      </div>

      <Collapse className="d-lg-none" in={open}>
        <div className="p-2 ">
          <form
            className="search-form d-flex  align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </Collapse>
    </div>
  );
};

export default Customer_Nav;
