import axios from 'axios';

const instance = axios.create({
  // baseUrl: 'http://localhost:5001/clone-33d8a/us-central1/api', //the api cloud function url
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
  // },

  baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api',
});

export default instance;
