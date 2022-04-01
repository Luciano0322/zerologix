import axios from 'axios'

const user = JSON.parse(localStorage.getItem("zeroLogixUser"));

const LogixV1WithToken = (token) => { 
  return axios.create({
    baseURL: `https://api.finlogix.com/v1`,
    headers: {
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + token
    }
  });
}

export default LogixV1WithToken