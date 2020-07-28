import React, { Component } from "react";
import DataService from "../services/data.service";
import { Carousel } from 'react-bootstrap';

export default class BridgeDataDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wgn: null,
      activeBridge: null,
      activeArticles: null,
      activePhotos: null,
    };
  };
  
  render() {
    if (this.props.wgn) {
      DataService.findByWGN(this.props.wgn)
        .then(response => {
          this.setState({
            activeBridge: response.data.bridges[0],
            activeArticles: response.data.articles,
            activePhotos: response.data.photos
          });
        })
        .catch(e => { console.log(e); });
    }

    return (
      <div>
        {this.state.activeBridge ?
        (
        <div>
          <p>{this.state.activeBridge.name}</p>
          <p>{this.state.activeBridge.wgn}</p>
              <div>
                <Carousel>
                  <Carousel.Item>
                    <img
                      src="../../images/scott 1.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="../../images/scott 1.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="../../images/scott 1.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
        ) :
        ( 
           "This will be the intro..."
        ) }
      </div>
    )
  }
}
