import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { db } from "../firebase";
import "./ContactUs.css";

export default function ContactUs() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("clients")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setClients(data);
        });

      return unsubscribe;
    }
  }, [db]);

  const handleonSubmit = (e) => {
    e.preventDefault();

    if (db) {
      db.collection("clients").add({
        name: name,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        email: email,
        service: service,
        number: number,
        message: message,
      });
    }
    alert("Product added successfully");
    setName("");
    setEmail("");
    setService("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="container" style={{ fontFamily: "Poppins-Bold" }}>
      <section className="get-in-touch">
        <h1 className="title">Contact Us</h1>
        <form className="contact-form row" onSubmit={handleonSubmit}>
          <div className="form-field col-lg-6">
            <input
              id="name"
              className="input-text js-input"
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="label" for="name">
              Name
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="email"
              className="input-text js-input"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="label" for="email">
              E-mail
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <select
              id="company"
              className="input-text js-input"
              type="text"
              required
              value={service}
              onChange={(e) => {
                setService(e.target.value);
              }}
            >
              <option value="customs-clearance">Customs Clearance</option>
              <option value="freight-forwarding">Freight Forwarding</option>
              <option value="air-transportation">Air Transportation</option>
              <option value="cargo-insurance">Cargo Insurance</option>
              <option value="logistics-solutions">Logistics Solutions</option>
              <option value="information-systems">Information Systems</option>
            </select>

            <label className="label" for="company">
              Service Required
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="phone"
              className="input-text js-input"
              type="number"
              required
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <label className="label" for="phone">
              Contact Number
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input
              id="message"
              className="input-text js-input"
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label className="label" for="message">
              Message
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
}
