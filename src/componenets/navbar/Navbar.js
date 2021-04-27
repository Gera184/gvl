import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/gvl.png";
import "./Navbar.css";
import { useAuth } from "../contexts/AuthContext.js";
import { useHistory } from "react-router";

export const Navbar = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory;

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <>
      <div className="row">
        <div class=" col align-self-bottom text-left">
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
          <a href="/our-story" className="navbar badge badge-light">
            Our Story
          </a>
          <a href="/services" className="navbar badge badge-light">
            Services
          </a>
          <a href="/solutions" className="navbar badge badge-light">
            Solutions
          </a>
          <a href="/contact-us" className="navbar badge badge-light">
            Contact
          </a>
        </div>
      </div>

      <div className="container align-self-center text-right">
        {currentUser ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col">
                  <a
                    href="/"
                    onClick={handleLogout}
                    className="navbar badge badge-light"
                  >
                    Logout
                  </a>
                  <a href="/admin" className="navbar badge badge-light">
                    Admin
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <span> {currentUser && currentUser.email} </span>
      </div>
    </>
  );
};
