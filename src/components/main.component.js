/**
 * Main Component of the Vermont Covered Bridges Website
 * This component renders the left-side navigation menu and the 
 * data display based on menu item selected
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import DataService from "../services/data.service";
import BridgeDataDisplay from "./bridge.data.component";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.setActiveBridge = this.setActiveBridge.bind(this);

    this.state = {
      bridges: [],
      activeBridge: null,
      currentIndex: -1,
    };
  }

  
  // once component is mounted, retreive the bridge list
  componentDidMount() {
    DataService.findAllBridgeNames()
      .then(response => {
        this.setState({ bridges: response.data });
      })
      .catch(e => { console.log(e); });
  }

  // set the active bridge in state
  setActiveBridge(bridge, index) {
    this.setState({
      activeBridge: bridge,
      currentIndex: index
    });
  }

  render() {
    const {bridges, currentIndex } = this.state;

    return (
      <div className="row">
        <div className="sidebar-sticky">
          <ul className="list-group">
            {bridges && 
              bridges.map((bridge, index) => (
                <li className={ "list-group-item " + (index === currentIndex ? "active" : "") }
                    onClick={() => this.setActiveBridge(bridge, index)}
                    key={index} >
                  {bridge.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          <BridgeDataDisplay wgn={this.state.activeBridge && this.state.activeBridge.wgn} />
        </div>
      </div>
    );
  }
}
