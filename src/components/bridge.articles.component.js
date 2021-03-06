/**
 * Article Component of the Vermont Covered Bridges Website
 * This component renders the article text for each bridge
 * 
 * Steven Bergeron
 * August 2020
 */
import React, { Component } from "react";

export default class BridgeArticlesDisplay extends Component {

  render() {
    return (
      <div className="p-2">
        {this.props.articles ?
          (
            this.props.articles.map(article => (
              <div key={article.id}
                   className="text-light text-justify">
                <p className="text-warning">{article.header}</p>
                <p>{article.text}</p>
              </div>
            ))
          ) :
          (
            <></>
          )}
      </div>
    );
  }

}
