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
            <>
              <div className="card bg-secondary" style={{ width: '20rem' }}>

                <div className="card-body text-light">
                  <div className="card-title font-weight-bold text-warning">Quick Facts</div>
                  <div className="row">
                    <div className="col left-col"><span>World Guide Number:</span></div>
                    <div className="col"><span>{this.props.bridge.wgn}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span >Current Use:</span></div>
                    <div className="col"><span>{this.props.bridge.current_use}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>County:</span></div>
                    <div className="col"><span>{this.props.bridge.county}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>Municipality:</span></div>
                    <div className="col"><span>{this.props.bridge.municipality}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>Location:</span></div>
                    <div className="col"><span>{this.props.bridge.loc_desc}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>Crosses:</span></div>
                    <div className="col"><span>{this.props.bridge.crosses}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>GPS:</span></div>
                    <div className="col"><a className="text-light"
                      href={'https://www.google.com/maps/place/'
                        + this.props.bridge.long + ', '
                        + this.props.bridge.lat}
                      target="_blank"
                      rel="noopener noreferrer">
                      {this.props.bridge.long}, {this.props.bridge.lat}</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>Built:</span></div>
                    <div className="col"><span>{this.props.bridge.built}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>Length:</span></div>
                    <div className="col"><span>{this.props.bridge.length} feet</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>Truss Design:</span></div>
                    <div className="col"><span>{this.props.bridge.truss}</span></div>
                  </div>
                  <div className="row">
                    <div className="col left-col"><span>National Register?</span></div>
                    <div className="col"><span>{this.props.bridge.nhrp}</span></div>
                  </div>
                </div>
              </div>
            </>
          ) :
          (
            <></>
          )}
      </div>
    )
  }
}
