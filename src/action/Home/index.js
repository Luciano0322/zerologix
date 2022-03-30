import HomeService from "../../services/HomeService";
import { RETRIEVE_HOME_POSTS } from "./homeType";

export const retrievePosts = (queryUrl) => async (dispatch) => {
  try {
    const res = await HomeService.getPosts(queryUrl);
    dispatch({
      type: RETRIEVE_HOME_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};