import axios from "axios";

var baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = "http://localhost:8080/api"
} else {
  baseURL = "https://cors-anywhere.herokuapp.com/https://vtbridges-api.herokuapp.com/api"
};

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});