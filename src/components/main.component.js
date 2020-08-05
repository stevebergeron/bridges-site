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
import '../css/my.css';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.setActiveBridge = this.setActiveBridge.bind(this);

    this.state = {
      activeBridge: "",
      currentIndex: -1
    };
  }

  // set the active bridge in state
  setActiveBridge(bridge, index) {
    
    DataService.findByWGN(bridge && bridge.wgn)
    .then(response => {
      this.setState({
        activeBridge: bridge,
        currentIndex: index,
        activeBridgeData: response.data.bridges && response.data.bridges[0],
        activeArticles: response.data.articles,
        activePhotos: response.data.photos
      });
    })
    .catch(e => { console.log(e); });
  }

  menuHandler(menuItems) {
    return menuItems.map((county, index) => (
      <>
      <div key={index+county.name}
        className="nav-link dropdown collapsed bg-secondary text-light dropdown-toggle" 
        data-toggle="collapse"
        data-target={"#"+county.name} >
          {county.name}
      </div>
      <div className="collapse"
            key={county.name}
            id={county.name}
            aria-expanded="false">
          {this.subMenuHandler(county.children)}
      </div>
      </>
    ))
  }

  subMenuHandler(subMenuItems) {
    let activeBridge = this.state.activeBridge;
    return subMenuItems.map((bridge, index) => (
      <div key={index+bridge.name}
            onClick={() => this.setActiveBridge(bridge, index)}
            className={"nav-link bg-secondary list-group-item " +
          (bridge === activeBridge && activeBridge.name ? "text-warning" : "text-light")}>
        {bridge.name}
      </div>
    ))
  }

  render() {
    const { currentIndex } = this.state;

    return (
       <div className="row">
         <div className="col-sm-2">
          <div className="sidebar sidebar-sticky">
            <div key="home"
              onClick={() => this.setActiveBridge(null, -1)}
              className={"nav-link bg-secondary list-group-item home-link " +
                (currentIndex === -1 ? "text-warning" : "text-light")}>Home
            </div>
            {this.menuHandler(this.props.bridges.data)}
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-sm-6">
              <BridgePhotoDisplay
                bridge={this.state.activeBridge}
                photos={this.state.activePhotos} />
            </div>
            <div className="col">
              <BridgeFactsDisplay
                bridge={this.state.activeBridgeData} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
            <BridgeArticlesDisplay
              articles={this.state.activeArticles} />
          </div>
          </div>
        </div>
     </div>
    );
  }
}
