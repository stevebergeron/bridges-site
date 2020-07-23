import React, { Component } from "react";
import BridgeDataService from "../services/bridge.service";

export default class BridgeList extends Component {
  constructor(props) {
    super(props);
    this.retrieveBridges = this.retrieveBridges.bind(this);
    this.setActiveBridge = this.setActiveBridge.bind(this);

    this.state = {
      bridges: [],
      activeBridge: null,
      activeArticles: null,
      activePhotos: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveBridges();
  }

  retrieveBridges() {
    BridgeDataService.findAllBridgeNames()
      .then(response => {
        this.setState({
          bridges: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActiveBridge(bridge, index) {
    BridgeDataService.findByWGN(bridge.wgn)
      .then(response => {
        this.setState({
          activeBridge: response.data.bridges[0],
          activeArticles: response.data.articles,
          activePhotos: response.data.photos,
          currentIndex: index
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {bridges, activeBridge, activeArticles, activePhotos, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Bridges List</h4>

          <ul className="list-group">
            {bridges && 
              bridges.map((bridge, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveBridge(bridge, index)}
                  key={index}
                >
                  {bridge.name}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {activeBridge ? (
            <div>
              <h4>Bridge</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {activeBridge.name}
              </div>
              <div>
                <label>
                  <strong>WGN:</strong>
                </label>{" "}
                {activeBridge.wgn}
              </div>
              <div>
                <label>
                  <strong>Photo Link:</strong>
                </label>{" "}
                {activePhotos.length > 0 ? activePhotos[0].link : ""}
              </div>
            </div>
          ) : (
              <div>
                <br />
                <p>Please click on a bridge...</p>
              </div>
            )}
        </div>
      </div>
    );
  }
}