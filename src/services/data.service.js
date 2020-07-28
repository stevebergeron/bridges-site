/**
 * Data serivce for the Vermont Covered Bridges Website
 * This service simply executes some HTTP GETs to the Vermont Covered Bridges Service
 * 
 * Steven Bergeron
 * July 2020
 */
import http from "../http-common";

class DataService {
  
  // get an array of all bridges with their name and WGN
  findAllBridgeNames() {
    return http.get("/bridges");
  }

  // get an object with all the content for one bridge base on its WGN
  findByWGN(wgn) {
    return http.get(`/bridges/wgn/${wgn}`);
  }
}

export default new DataService();