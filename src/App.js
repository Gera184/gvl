import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./componenets/footer/Footer";
import { Main } from "./componenets/main/Main";
import { Navbar } from "./componenets/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./componenets/pages/contact-us/ContactUs";
import OurStory from "./componenets/pages/our-story/OurStory";
import Services from "./componenets/pages/services/Services";
import Solutions from "./componenets/pages/solutions/Solutions";

export default () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/our-story" component={OurStory} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/solutions" component={Solutions} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};
