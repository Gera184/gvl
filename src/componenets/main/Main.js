import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./Main.css";
import Plane from "../assets/plane.jpg";
import port from "../assets/port.jpg";
import ship from "../assets/ship.jpg";
import calculator from "../assets/calculator.jpg";
import businessman from "../assets/businessman.jpg";
import shipMain from "../assets/ship-main.jpg";
import planeMain from "../assets/plane-main.jpg";
import logistics from "../assets/logistics.jpg";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Logo from "../assets/logo.jpg";
import GvlMap from "../map/GvlMap";
import ContactUs from "../pages/contact-us/ContactUs";
import Currency from "../currency/Currency";
import { db } from "../pages/firebase";

export const Main = () => {
  const [queries, setQueries] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("news")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setQueries(data);
        });

      return unsubscribe;
    }
  }, [db]);

  return (
    <>
      <div class="col-md-6 container">
        <h6 className="text-center align-self-center">Daily news</h6>
        {queries.map((meassage) => (
          <section id="block_content">
            <blockquote class="blockstyle">
              {" "}
              <span class="triangle"></span>
              {meassage.news}{" "}
            </blockquote>
          </section>
        ))}
      </div>

      <Currency />
      <div class="container">
        <div class="row">
          <div class="col text-center align-self-center">
            <h1 className="sub-header">Grand Vision Logistics</h1>
          </div>
        </div>

        <div class="row">
          <div class="col text-center align-sself-center">
            <h2 className="logistics-header">
              G.V.L International Shipping Company
            </h2>
          </div>
        </div>
      </div>

      <div className="carusela">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-80" src={planeMain} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-80" src={shipMain} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-80" src={planeMain} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div class="container middle-page-con">
        <div class="row">
          <div class="col text-center align-self-center">
            <h5>Why Grand Vision Logistics?</h5>
          </div>
        </div>

        <div class="middle-page-col col text-center align-self-center">
          <p>
            <span className="gvl-span">Grand Vision Logistics </span>
            offers international freight forwarding services and provides global
            logistics solutions that include the variety of services
            accompanying air/sea exports/imports, such as customs brokerage,
            warehousing, distribution and logistics. We provide professional and
            focused solutions – pre-process consultation, handling of complex
            cargoes and other challenges. Grand Vision Logistics professional
            divisions specialize in the entire range of international shipping
            solutions. We implement the concept of ONE STOP SHOP, led by GVL
            Group.
          </p>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img style={{ width: "100%" }} src={port} alt="" />
          <Carousel.Caption>
            <div className="text-center align-self-center">
              <h1 className="image-header">Grand Vision Logistics</h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="services-and-technologies container text-center align-self-center">
        <div className="row">
          <div className="col">
            <h5>Our services & Technologies</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Over the past decade Grand Vision Logistics has invested huge
              resources in the development of the AMITAL – TFC Information
              Technologies – system, one of the most up-to-date systems in the
              world today. The system aims to provide service at worldwide
              standards via reliable, state-of-the-art information in real time,
              enabling rapid response to variable data and staying abreast of
              dynamic changes in the world economy.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <h4>Professional Services</h4>
          </div>
        </div>
      </div>

      <div className="card-con container text-center align-self-center">
        <div className="row">
          <div className="col">
            <div className="card bg-dark mb-3" style={{ width: "20rem" }}>
              <img
                src={calculator}
                style={{ width: "20rem", height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Customs Clearance</h5>
                <p className="card-text">Expert Service</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-primary mb-3" style={{ width: "20rem" }}>
              <img src={ship} style={{ width: "20rem", height: "12rem" }} />
              <div className="card-body">
                <h5 className="card-title">Freight Forwarding</h5>
                <p className="card-text">Always Prepared</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-info mb-3" style={{ width: "20rem" }}>
              <img src={Plane} style={{ width: "20rem", height: "12rem" }} />
              <div className="card-body">
                <h5 className="card-title">Air Transportation</h5>
                <p className="card-text">Attention to Detail</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card bg-danger mb-3" style={{ width: "20rem" }}>
              <img
                style={{ width: "20rem", height: "12rem" }}
                src="https://www.shippingandfreightresource.com/wp-content/uploads/2013/08/listing-cargo-ship.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Cargo Insurance</h5>
                <p className="card-text">Expert Service</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-success mb-3" style={{ width: "20rem" }}>
              <img
                style={{ width: "20rem", height: "12rem" }}
                src={logistics}
              />
              <div className="card-body">
                <h5 className="card-title">Logistics Solutions</h5>
                <p className="card-text">Always Prepared</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark mb-3" style={{ width: "20rem" }}>
              <img
                style={{ width: "20rem", height: "12rem" }}
                src="https://guardian.ng/wp-content/uploads/2016/09/Information-Technology-Networking-Ithaca-NY.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Information Systems</h5>
                <p className="card-text">Attention to Detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="end-page-con container text-center align-self-center">
        <div class="row">
          <div class="col ">
            <h5>Customs clearance</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Grand Vision Logistics customs clearance department specializes in
              the provision of customs services to customers from a variety of
              fields: high-tech, automotive industry, oil & energy, food,
              textile and others
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              The department is run by a highly professional staff with over 35
              years of experience in providing comprehensive advice in all
              matters concerning trade agreements, import legality and the issue
              of licenses from government and other factors, including the
              Ministries of Communication; Health; Industry, Trade and Labor;
              and the Israeli Standards Institution
            </p>
          </div>
        </div>
      </div>

      <div className="row align-self-center text-center">
        <div className="col">
          <h3>OUR OFFICES IN ISRAEL</h3>
        </div>
      </div>

      <div className="logos align-self-center text-center">
        <img src={Logo} />
      </div>
      <GvlMap />
      <ContactUs />
    </>
  );
};
