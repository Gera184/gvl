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
import PrivateRoute from "./componenets/contexts/PrivateRoute";
import { AuthProvider } from "./componenets/contexts/AuthContext";
import Login from "./componenets/credentials/login/Login";
import Admin from "./componenets/credentials/admin/Admin";

export default () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <AuthProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/our-story" component={OurStory} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/solutions" component={Solutions} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </AuthProvider>
      <Footer />
    </div>
  );
};
