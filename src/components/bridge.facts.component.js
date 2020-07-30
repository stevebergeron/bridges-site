/**
 * Bridge Facts Component of the Vermont Covered Bridges Website
 * This component renders the "quick facts" box
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import '../css/my.css';

export default class BridgeFactsDisplay extends Component {
  
  render() {
    return (
      <div>
        {this.props.bridge ?
          (
            <>
              <Card bg="secondary" style={{ width: '20rem' }}>

                <Card.Body className="text-light">
                  <Card.Title className="font-weight-bold text-warning">Quick Facts</Card.Title>
                  <Row>
                    <Col sm={5} className="left-col"><span>World Guide Number:</span></Col>
                    <Col><span>{this.props.bridge.wgn}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span >Current Use:</span></Col>
                    <Col><span>{this.props.bridge.current_use}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>County:</span></Col>
                    <Col><span>{this.props.bridge.county}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>Municipality:</span></Col>
                    <Col><span>{this.props.bridge.municipality}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>Location:</span></Col>
                    <Col><span>{this.props.bridge.loc_desc}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>Crosses:</span></Col>
                    <Col><span>{this.props.bridge.crosses}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>GPS:</span></Col>
                    <Col><a className="text-light"
                      href={'https://www.google.com/maps/place/'
                        + this.props.bridge.long + ', '
                        + this.props.bridge.lat}
                      target="_blank"
                      rel="noopener noreferrer">
                      {this.props.bridge.long}, {this.props.bridge.lat}</a>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>Built:</span></Col>
                    <Col><span>{this.props.bridge.built}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>Length:</span></Col>
                    <Col><span>{this.props.bridge.length} feet</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>Truss Design:</span></Col>
                    <Col><span>{this.props.bridge.truss}</span></Col>
                  </Row>
                  <Row>
                    <Col sm={5} className="left-col"><span>National Register?</span></Col>
                    <Col><span>{this.props.bridge.nhrp}</span></Col>
                  </Row>
                </Card.Body>
              </Card>
            </>
          ) :
          (
            <></>
          )}
      </div>
    )
  }
}
