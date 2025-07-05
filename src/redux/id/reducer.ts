import UserActionTypes from "./action-types";

const initialState = {
  currentId: "",
  type: "",
};

const IdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.UPDATE_MOVIE_ID:
      return {
        ...state,
        currentId: action.payload,
        type: "Movie",
      };
    case UserActionTypes.UPDATE_ANIME_ID:
      return {
        ...state,
        currentId: action.payload,
        type: "Anime",
      };
    case UserActionTypes.UPDATE_SERIES_ID:
      return {
        ...state,
        currentId: action.payload,
        type: "Serie",
      };
    default:
      return state;
  }
};

export default IdReducer;
