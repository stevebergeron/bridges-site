import axios from "axios";

var baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = "http://localhost:8080/api"
} else {
  baseURL = "https://vtbridges-api.herokuapp.com/api"
};

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});