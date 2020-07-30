/**
 * App Component of the Vermont Covered Bridges Website
 * This component is the main page display engine
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/main.component";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
import './css/dashboard.css'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="dark" variant="dark" sticky="top">
          <NavbarBrand href="/bridges" className="col-md-6">
            <h3 className="text-warning">Vermont Covered Bridges on Two Wheels</h3>
            
          </NavbarBrand>
          <div>
            <h6 className="text-warning text-right">
              <em>A photographic journey to Vermont's Covered Bridges</em>
            </h6>
          </div>
        </Navbar>
        <Main />
      </Container>
    );
  }
}

export default App;
