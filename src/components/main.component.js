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
import Intro from "./intro.component";
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
      currentIndex: -1,
      photoHeight: 400
    };
  }

  componentDidMount() {
    if (window.matchMedia("(max-width: 576px)").matches) {
      document.getElementById('sidenav').classList.add('collapsed')
      document.getElementById('sidenav').classList.add('collapse')
      this.setState({ photoHeight: 175})
    } else {
      this.setState({ photoHeight: 400})
    }
  }

  checkCollapseOnClick() {
    if (window.matchMedia("(max-width: 576px)").matches) {
      return "collapse" }
      else return "show";
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
      <div key={county.name}>
      <div 
        className="nav-link dropdown collapsed bg-secondary text-light dropdown-toggle" 
        data-toggle="collapse"
        data-target={"#"+county.name} >
          {county.name}
      </div>
      <div className="collapse"
            id={county.name}
            aria-expanded="false">
          {this.subMenuHandler(county.children)}
      </div>
      </div>
    ))
  }

  subMenuHandler(subMenuItems) {
    let activeBridge = this.state.activeBridge;
    return subMenuItems.map((bridge, index) => (
      <div key={bridge.wgn}
            data-toggle={this.checkCollapseOnClick()} data-target="#sidenav"
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

        {/* sidebar menu */}
        <div className="col-sm-3">
          <div id="sidenav" className="sidebar sidebar-expand-md sidebar-sticky sidebar-toggler">
            <div key="home"
              data-toggle={this.checkCollapseOnClick()} data-target="#sidenav"
              onClick={() => this.setActiveBridge(null, -1)}
              className={"nav-link bg-secondary list-group-item home-link  " +
                (currentIndex === -1 ? "text-warning" : "text-light")
              }>Home
             </div>
            {this.menuHandler(this.props.bridges.data)}
          </div>
        </div>

        

        {/* MAIN Content */}
        {/* If there a selected bridge... show the bridge stuff */}
        <div className="col">
          {this.state.activeBridge ?
            (<>
              <div className="row mt-3 mx-auto">
                <div className="col">
                <BridgePhotoDisplay
                  bridge={this.state.activeBridge}
                  photos={this.state.activePhotos}
                  height={this.state.photoHeight} />
              </div>
              </div>

              <div className="row p-1">
                <BridgeFactsDisplay bridge={this.state.activeBridgeData} />
              </div>

              <div className="row">
                <BridgeArticlesDisplay articles={this.state.activeArticles} />
              </div>
            </>) :
            (
              <div className="mt-3">
                {/* No active bridge... show the "intro" page */}
                <Intro />
              </div>
            )}
        </div>
      </div>
    );
  }
}
