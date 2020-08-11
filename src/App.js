/**
 * App Component of the Vermont Covered Bridges Website
 * This component is the main page display engine
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import DataService from "./services/data.service";
import Main from "./components/main.component";
import './css/dashboard.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bridges: null };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  // once component is mounted, retreive the bridge list
  componentDidMount() {
    DataService.findAllMenuData()
      .then(response => {
        this.setState({ bridges: response.data });
      })
      .catch(e => { console.log(e); });
  }

  handleMenuClick() {
    window.scrollTo(0,0)
  }

  render() {
    if (!this.state.bridges) {
      return <div className="text-light">Loading menu...</div>
    }

    return (
      <div className="container">
        <div className="navbar navbar-expand-md bg-dark sticky-top py-3 border">
          <div className="container-fluid">

            {/* Hamburger menu button (if needed */}
            <button className="navbar-toggler navbar-dark" type="button"
              data-toggle="collapse" data-target="#sidenav"
              aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" onClick={this.handleMenuClick}></span>
            </button>

            <div className="text-warning">
              <h5>Vermont Covered Bridges... on Two Wheels</h5>
            </div>
            
            <div>
              <h6 className="text-warning">
                <em>A photographic journey to Vermont's Covered Bridges</em>
              </h6>
            </div>
          </div>
        </div>

        <Main bridges={this.state.bridges} />
      </div>
    );
  }
}

export default App;
