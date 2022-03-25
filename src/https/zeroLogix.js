import axios from 'axios'

const LogixDataV1 = axios.create({
  baseURL: `https://api.finlogix.com/v1`,
  headers: {
    "Content-type": "application/json",
  }
})

export default LogixDataV1