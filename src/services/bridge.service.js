import http from "../http-common";

class BridgeDataService {
  findAllBridgeNames() {
    return http.get("/bridges");
  }

  // get(id) {
  //   return http.get(`/tutorials/${id}`);
  // }

  findByWGN(wgn) {
    return http.get(`/bridges/wgn/${wgn}`);
  }
}

export default new BridgeDataService();