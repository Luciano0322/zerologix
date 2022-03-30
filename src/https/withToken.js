import axios from 'axios'

const user = JSON.parse(localStorage.getItem("zeroLogixUser"));

const LogixV1WithToken = axios.create({
  baseURL: `https://api.finlogix.com/v1`,
  headers: {
    "Content-type": "application/json",
    "Authorization": 'Bearer ' + user?.token ?? ''
  }
})

export default LogixV1WithToken