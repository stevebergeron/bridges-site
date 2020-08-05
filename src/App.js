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
  }
  // once component is mounted, retreive the bridge list
  componentDidMount() {
    DataService.findAllMenuData()
      .then(response => {
        this.setState({ bridges: response.data });
      })
      .catch(e => { console.log(e); });
  }

  render() {
    if (!this.state.bridges) {
      return <div className="text-light">Loading menu...</div>
    }

    return (
      <div className="container-fluid">
        <div className="navbar bg-dark sticky-top">
          <div className="navbar-brand col-md-6" href="/bridges">
            <h3 className="text-warning">Vermont Covered Bridges on Two Wheels</h3>
          </div>
          <div>
            <h6 className="text-warning text-right">
              <em>A photographic journey to Vermont's Covered Bridges</em>
            </h6>
          </div>
        </div>
        <Main bridges={this.state.bridges} />
      </div>
    );
  }
}

export default App;
