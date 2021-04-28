import axios from 'axios'



export default axios.create({
    baseURL: "http://192.168.13.117:3000",
    timeout: 1000
  });