/**
 * Bridge Photo Component of the Vermont Covered Bridges Website
 * This component renders the photo slideshow
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import { Image, Transformation } from 'cloudinary-react';
import { Carousel, CarouselItem } from "react-bootstrap";
import '../css/my.css';

export default class BridgePhotoDisplay extends Component {
  
  render() {

    return (
      <div>
        
            <div>
              <h3 className="text-light">{this.props.bridge.name} Bridge</h3>
              <div className="border border-light rounded-lg">

                <Carousel id="photo-carousel" >
                  {this.props.photos.map(photo => {
                    return (
                      <CarouselItem key={photo.id} className={"d-block img-fluid " + photo.id === 1 ? "active" : ""}>
                        <Carousel.Caption>
                          <h5>{photo.date_taken}</h5>
                          <h6>{photo.caption}</h6>
                        </Carousel.Caption>
                        <Image cloudName="hjugvucxs" publicId={photo.link} className="mx-auto d-block">
                          <Transformation
                            dpr="auto"
                            height="350" crop="scale"
                            responsiveUseBreakpoints="true"
                          />
                        </Image>
                      </CarouselItem>
                    )
                  })
                  }
                </Carousel>
              </div>
            </div>
          
      </div>
    )
  }
}
