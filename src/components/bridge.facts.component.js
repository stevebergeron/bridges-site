/**
 * Bridge Facts Component of the Vermont Covered Bridges Website
 * This component renders the "quick facts" box
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import '../css/my.css';

export default class BridgeFactsDisplay extends Component {
  
  render() {
    return (
      <div>
        {this.props.bridge ?
          (
              <div className="card bg-dark border-light mt-3">

                <div className="card-body text-light">
                  <div className="card-title font-weight-bold text-warning">Quick Facts</div>

                  <div className="row">
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">World Guide Number: </span><span>{this.props.bridge.wgn}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Current Use: </span><span>{this.props.bridge.current_use}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">County: </span><span>{this.props.bridge.county}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Municipality: </span><span>{this.props.bridge.municipality}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Location: </span><span>{this.props.bridge.loc_desc}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Crosses: </span><span>{this.props.bridge.crosses}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">GPS: </span>
                      <a href={'https://www.google.com/maps/place/'
                        + this.props.bridge.long + ', '
                        + this.props.bridge.lat}
                        target="_blank"
                        rel="noopener noreferrer">
                      {this.props.bridge.long}, {this.props.bridge.lat}</a>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Built: </span><span>{this.props.bridge.built}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Length: </span><span>{this.props.bridge.length} feet</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">Truss Design: </span><span>{this.props.bridge.truss}</span>
                    </div>
                    <div className="py-1 px-2">
                      <span className="font-weight-bold">National Register? </span><span>{this.props.bridge.nhrp}</span>
                    </div>
                  </div>
                </div>
              </div>
          ) :
          (
            <></>
          )}
      </div>
    )
  }
}
