import React, { Component } from "react";
import DataService from "../services/data.service";
import { Transformation, Image } from 'cloudinary-react';
import { Carousel, CarouselItem } from "react-bootstrap";

export default class BridgeDataDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wgn: null,
      activeBridge: null,
      activeArticles: null,
      activePhotos: [],
    };
  };

  render() {
    DataService.findByWGN(this.props.wgn)
      .then(response => {
        this.setState({
          activeBridge: response.data.bridges[0],
          activeArticles: response.data.articles,
          activePhotos: response.data.photos
        });
      })
      .catch(e => { console.log(e); });

    return (
      <div>
        {this.state.activeBridge ?
          (
            <div>
              <h3 className="text-light">{this.state.activeBridge.name}</h3>
              <div>

                <Carousel id="photo-carousel" >
                  {this.state.activePhotos.map(data => {
                    return (
                      <CarouselItem key={data.id} className={"d-block w-100 " + data.id === 1 ? "active" : ""}>
                        <Carousel.Caption>
                          <span className="bg-dark">Slide Caption</span>
                        </Carousel.Caption>
                        <Image cloudName="hjugvucxs" publicId={data.link} className="cld-responsive d-block w-100">
                          <Transformation
                            crop="scale"
                            width="800"
                          />
                        </Image>
                      </CarouselItem>
                    )
                  })
                  }
                </Carousel>
              </div>
            </div>
          ) :
          (
            <h3 className="text-light">This will be the intro...</h3>
          )}
      </div>
    )
  }
}
