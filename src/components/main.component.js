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
import BridgePhotoDisplay from "./bridge.photo.component";
import BridgeFactsDisplay from "./bridge.facts.component";
import BridgeArticlesDisplay from "./bridge.articles.component";
import { Nav, Row, Col } from "react-bootstrap";

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
    
    DataService.findByWGN(bridge && bridge.wgn)
    .then(response => {
      this.setState({
        activeBridge: bridge,
        currentIndex: index,
        activeBridgeData: response.data.bridges[0],
        activeArticles: response.data.articles,
        activePhotos: response.data.photos
      });
    })
    .catch(e => { console.log(e); });
    
    
  }

  render() {
    const {bridges, currentIndex } = this.state;

    return (
      <><Row>
        <Col sm={2}>
          <div className="sidebar sidebar-sticky">
            <Nav.Link
              onClick={() => this.setActiveBridge(null, -1)}
              className={"bg-secondary list-group-item home-link " +
                (currentIndex === -1 ? "text-warning" : "text-light")}>Home
            </Nav.Link>

            {bridges && bridges.map((bridge, index) => (
            <Nav.Link key={index}
              onClick={() => this.setActiveBridge(bridge, index)}
              className={"bg-secondary list-group-item " +
                (index === currentIndex ? "text-warning" : "text-light")}>
              {bridge.name}
            </Nav.Link>
            ))}
          </div>
        </Col>
        <Col sm={7}>
          <Row>
            <Col sm={9}>
              <BridgePhotoDisplay
                bridge={this.state.activeBridge}
                photos={this.state.activePhotos} />
            </Col>
            <Col sm={2}>
              <BridgeFactsDisplay
                bridge={this.state.activeBridgeData} />
            </Col>
          </Row>
          <Row>
            <BridgeArticlesDisplay
          articles={this.state.activeArticles} />
          </Row>
        </Col>
      </Row>
     </>
    );
  }
}
