import axios from "axios";

const getPosts = (query) => {
  return axios.get(query)
};

const HomeService = {
  getPosts
}

export default HomeService;