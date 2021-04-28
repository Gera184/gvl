import React, { useState, useEffect } from "react";
import { db } from "../../pages/firebase";
import { Image, OverlayTrigger, Tooltip, Button, Alert } from "react-bootstrap";
import "./Admin.css";

export default function Admin() {
  const [queries, setQueries] = useState([]);
  const [clients, setClients] = useState([]);
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
    db.collection("news").doc("tALLhURNznrCKJfmshvG").update({
      news: message,
    });
    setMessage("");
  };

  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <Alert variant="dark" onClose={() => setShow(false)} dismissible>
                {queries.map((meassage) => (
                  <p>{meassage.news}</p>
                ))}
              </Alert>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container text-center align-self-center">
        <div className="row">
          <div className="col">
            <a class="orange-moon" type="button" onClick={() => setShow(true)}>
              Daily news!
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="admin-page">
        <AlertDismissibleExample />

        <div class="container">
          <form
            className="text-center align-self-center"
            onSubmit={handleonSubmit}
          >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <a type="submit" class="orange-moon">
              Success
            </a>
          </form>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Service</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr>
                <th scope="row">{index} </th>
                <td>
                  {" "}
                  {new Date(client.createdAt.seconds * 1000).toLocaleDateString(
                    "en-US"
                  )}
                </td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.number}</td>
                <td>{client.service}</td>
                <td>{client.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
