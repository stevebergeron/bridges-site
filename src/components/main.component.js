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
import Terminology from "./terminology.component";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.setActiveBridge = this.setActiveBridge.bind(this);

    this.state = {
      activeBridge: "",
      currentIndex: -1,
      activeBridgeData: null,
      activePhotos: null,
      activeArticles: null,
      activePage: "home",
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
        activePhotos: response.data.photos,
        activePage: ""
      });
    })
    .catch(e => { console.log(e); });
  }

  // set the active page in state (if it's not one of the bridges)
  setPage(page) {
    this.setState({
      activeBridge: null,
      currentIndex: -1,
      activePage: page
    })
  }

  // Set up the left navigation menu (top level)
  menuHandler(menuItems) {
    return menuItems.map((county, index) => (
      <div key={county.name}>
      <div 
        className="nav-link dropdown collapsed bg-secondary text-light dropdown-toggle" 
        data-toggle="collapse"
        data-target={"#"+county.name} >
          {county.name} County
      </div>
      <div className="collapse"
            id={county.name}
            aria-expanded="false">
          {this.subMenuHandler(county.children)}
      </div>
      </div>
    ))
  }

  // Set up the left navigation menu sub-menus
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
    const { activePage,
            activeBridge, 
            activeBridgeData,
            activePhotos, 
            activeArticles,
            photoHeight } = this.state;

    return (
      <div className="row">

        {/* sidebar menu */}
        <div className="col-lg-3">
          <div id="sidenav" className="sidebar sidebar-expand-md sidebar-sticky sidebar-toggler">
            
            {/* static menu items */}
            <div key="home"
              data-toggle={this.checkCollapseOnClick()} data-target="#sidenav"
              onClick={() => this.setPage("home")}
              className={"nav-link bg-secondary list-group-item home-link pl-2 " +
                (activePage.includes("home") ? "text-warning" : "text-light")
              }>Home
             </div>

             <div key="term"
              data-toggle={this.checkCollapseOnClick()} data-target="#sidenav"
              onClick={() => this.setPage("term")}
              className={"nav-link bg-secondary list-group-item pl-2 " +
                (activePage.includes("term") ? "text-warning" : "text-light")
              }>Bridge Terminology
             </div>

            {/* dynamically created menu items */}
            {this.menuHandler(this.props.bridges.data)}
          </div>
        </div>

        {/* MAIN Content */}
        {/* If there a selected bridge... show the bridge stuff */}
        <div id="main-content" className="col">
          {activeBridge ?
            (<>
              <div className="row mt-3 mx-auto">
                <div className="col">
                <BridgePhotoDisplay
                  bridge={activeBridge}
                  photos={activePhotos}
                  height={photoHeight} />
              </div>
              </div>

              <div className="row p-1">
                <BridgeFactsDisplay bridge={activeBridgeData} />
              </div>

              <div className="row">
                <BridgeArticlesDisplay articles={activeArticles} />
              </div>
            </>) :
            (
              /* No active bridge... show one of the "non-bridge" pages */
              activePage && activePage.includes("home") ? ( 
              <div className="mt-3">                
                <Intro />
              </div>
              )
              : 
              (
              <div className="mt-3">                
                <Terminology />
              </div>
              )
            )}
        </div>
      </div>
    );
  }
}
