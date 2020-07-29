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
import { Nav, Row } from "react-bootstrap";

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
      <div>
        <Row>
          <Nav className="flex-column">
            <Nav.Link 
                onClick={() => this.setActiveBridge(null, -1)}
                className={"bg-secondary list-group-item " +
                 (currentIndex === -1 ? "text-warning" : "text-light")}>Home</Nav.Link>
            {bridges && bridges.map((bridge, index) => (
              <Nav.Link key={index}
                onClick={() => this.setActiveBridge(bridge, index)}
                className={"bg-secondary list-group-item " +
                 (index === currentIndex ? "text-warning" : "text-light")}>
                {bridge.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="col-md-9">
            <BridgeDataDisplay wgn={this.state.activeBridge && this.state.activeBridge.wgn} />
          </div>
        </Row>
      </div>
    );
  }
}
