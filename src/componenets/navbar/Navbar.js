import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/gvl.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="row">
        <div class=" col align-self-bottom text-center">
          <img
            src={Logo}
            alt=""
            class="img-fluid mx-auto"
            style={{ width: 150 }}
          />
        </div>

        <div class="col text-center align-self-center">
          <a href="/home" className="navbar badge badge-light">
            Home
          </a>
          <a href="/services" className="navbar badge badge-light">
            Services
          </a>
          <a href="/our-story" className="navbar badge badge-light">
            Our Story
          </a>
          <a href="/contact-us" className="navbar badge badge-light">
            Contact
          </a>
          <a href="/solutions" className="navbar badge badge-light">
            Solutions
          </a>
        </div>
      </div>
    </>
  );
};
