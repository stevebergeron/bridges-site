import React, { Component } from "react";
import DataService from "../services/data.service";
import { Transformation, CloudinaryContext, Image } from 'cloudinary-react';
const axios = require('axios');

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
              <div className="gallery">
                  <CloudinaryContext cloudName="hjugvucxs">
                    <div className="responsive">
                      {this.state.activePhotos.map(data => {
                        return (
                          <div className="responsive" key={data.id}>

                            <Image publicId={data.link}>
                            <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                            </Image>
                            
                          </div>

                        )
                      })
                      }
                    </div>
                  </CloudinaryContext>
                </div>
              </div>
            </div>
        ) :
        ( 
           <h3 className="text-light">This will be the intro...</h3>
        ) }
      </div>
    )
  }
}
