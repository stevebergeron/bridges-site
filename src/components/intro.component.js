/**
 * Intro Component of the Vermont Covered Bridges Website
 * This component renders the introductory page (home)
 * 
 * Steven Bergeron
 * July 2020
 */
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Intro extends Component {

  render() {
    return (
      <>
      <div className="text-light">
        <h2>Welcome!</h2>
        <p>I have been interested in covered bridges for some time now,
        visiting and photographing some of the ones closer to my home.
        In 2008, after a long hiatus, I got back into motorcycling with
        the purchase of a 2007 Honda Sabre. I then got the idea that it
        would be fun to visit all the covered bridges in the State of Vermont on my motorcycle.</p>
        <p>The motorcycles changed over the years, but the mission remained the same.
        I have visited all of the 100+ authentically constructed covered bridges
        in Vermont. These pages contain all of the bridges that were standing when I
        began this project and chronicles my journeys.</p>
        <p>As time marches on, things change. And these old bridges, the oldest of them
        pushing 200 years of age, have become victims to weather, time and vandalism.
        The Bartonsville Covered Bridge was famously washed off one of its abutments
        and destroyed during the flooding caused by Tropical Storm Irene (August 28, 2011).
        The bridge has been rebuilt, but obviously, it's not quite the same. Another bridge
        (the Cedar Swamp Bridge) was destroyed by fire on September 10, 2016.</p>
        <p>Other bridges have just plain fallen victim to time (and possibly neglect) and
         are closed, but for the time being remain standing. Others have been lovingly 
         restored and ready to serve for possibly another 100+ years. It has to be said, 
         though, that Vermont's covered bridges, by and large, have lasted much longer than 
         their modern steel and concrete counterparts. With renewed interest in preserving 
         these treasures, hopefully they will be around for many more generations to remind 
         us of a time when things were a little more simple.</p>
      </div>
      <div>
        <Row className="text-light">
        <Col>
        <h6 className="text-warning">Aren't there a lot of other covered bridge web sites?</h6>
        <p>Yes, in fact there are quite a few. What makes mine different is that rather than just
           spitting out the same data that other sites do, I add some history and personal 
           experience with each bridge. All the different bridges have their own page on this site.</p>
        <p>Each bridge's web page provides some basic stats about the bridge, but not every single
           "boring" detail. I want this to be an interesting "photo essay" type of web site, not 
           just a list of stats. Since the journey was conducted on my motorcycle, I will attempt 
           to give tips about road conditions and etc. to those who might want to climb aboard their
            own bike and make at least part of the same journey.</p>
        </Col>
        <Col>
        <h6 className="text-warning">Where have I gotten my information?</h6>
        <p>Much of the information I have shared on this site has come from multiple sources. 
          The same sources that other web sites use, no doubt. There are several printed guides
           available, but like any printed material, they tend to be obsolete. Some of the bridges
            on other web sites and in printed books don't exist anymore.</p>
         <h6 className="text-warning">Credit where credit is due department</h6>
         <p>Originally, this project started out as just a bunch of pictures that I put together 
           into albums on Facebook. But I was getting increasingly frustrated with trying to arrange 
           the photos properly to tell the story that I wanted. Photo sharing websites such as Flickr
            weren't that much better. So my wife Lisa said one day, "why don't you build a web site?" 
            I don't think she had this extensive a site in mind (and neither did I!) So here we are. 
            I have to thank her for the inspiration, and for the tolerance she has shown as I struck 
            out on my bike to pursue these photos.</p>
        </Col>
        </Row>
        <Row className="text-light">
        <h6 className="text-warning">Bibliography</h6>
        <ul>
          <li>Barna, Ed. Covered Bridges of Vermont. Woodstock, VT: Countryman, 1996.</li>
          <li>Caswell, Bill, and Trish Kane. lostbridges.org. Covered Spans of Yesterday web site.</li>
          <li>Congdon, Herbert Wheaton. The Covered Bridge. Middlebury, VT: Vermont Books, 1973</li>
          <li>Evans, Benjamin D., and June R. Evans. New England's Covered Bridges: A Complete Guide. Lebanon, NH: University of New England, 2004.</li>
          <li>Pierce, Phillip C. Covered Bridge Manual. McLean, VA: U.S. Department of Transportation, Federal Highway Administration, Research, Development, and Technology, Turner-Fairbank Highway Research Center, 2005.</li>
          <li>Nelson, Joseph C. Spanning Time: Vermont's Covered Bridges. Shelburne, VT: New England, 1997.</li>
          <li>Nelson, Joseph C. VermontBridges.com. Vermont Covered Bridge Society web site.</li>
        </ul>
        </Row>
      </div>
      </>
    );
  }
}
