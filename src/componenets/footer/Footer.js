import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="footer-body">
      <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div class="row my-5 justify-content-center py-5">
            <div class="col-11">
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <h3 class="text-muted mb-md-0 mb-5 bold-text">
                    Grand Vision Logistics.
                  </h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 bold-text ">
                    <b>NAVIGATION</b>
                  </h6>
                  <ul class="list-unstyled">
                    <a style={{ color: "#627482" }} href="/contact-us">
                      {" "}
                      <li>About us</li>
                    </a>
                    <a style={{ color: "#627482" }} href="/contact-us">
                      {" "}
                      <li>Contact</li>
                    </a>
                    <a style={{ color: "#627482" }} href="/contact-us">
                      {" "}
                      <li>Cargo tracking</li>
                    </a>
                  </ul>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p class="mb-2">Tel Aviv , meitav 11 st'</p>
                  <p class="mb-1">Ben gurion airport </p>
                  <p class="mb-1">Ashdod , zim building </p>
                  <p class="mb-1">Haifa , hanamal 28 st'</p>
                </div>
              </div>
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p class="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span class="mx-2">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>{" "}
                  </p>
                  <small class="rights">
                    <span>&#174;</span>Designed and built by German Davidov.
                    <div>
                      <span></span>Email: oogeraoo159@gmail.com
                    </div>
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 class="mt-55 mt-2 text-muted bold-text">
                    <b>SALES DEPARTMENT</b>
                  </h6>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    sales@gvlg.org
                  </small>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    +972504482278
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  {/* <h6 class="text-muted bold-text">
                    <b>CEO</b>
                  </h6> */}
                  {/* <small>
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    vitali@gvlg.org
                  </small> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
