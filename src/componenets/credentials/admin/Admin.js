import React, { useState, useEffect } from "react";
import { db } from "../../pages/firebase";
import "./Admin.css";

export default function Admin() {
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

  const handleonSubmit = (e) => {
    e.preventDefault();
    db.collection("news").doc("tALLhURNznrCKJfmshvG").update({
      news: message,
    });
    setMessage("");
  };

  return (
    <div className="admin-page">
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
          <button type="submit" class="btn btn-outline-success">
            Success
          </button>
        </form>
      </div>
    </div>
  );
}
