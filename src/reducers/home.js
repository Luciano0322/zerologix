import { RETRIEVE_HOME_POSTS } from "../action/Home/homeType";

const initialState = []

const homeReducer = (home = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_HOME_POSTS:
      return payload;
    default:
      return home;
  }
};

export default homeReducer;