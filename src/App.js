/**
 * App Component of the Vermont Covered Bridges Website
 * This component is the main page display engine
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main.component";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar bg="dark" variant="dark" sticky="top">
            <NavbarBrand href="/bridges" >
              <h3 className="text-warning">Vermont Covered Bridges (on Two Wheels!)</h3>
            </NavbarBrand>
          </Navbar>
          <Container>
            <Route exact path={["/", "/bridges"]} component={Main} />
          </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
