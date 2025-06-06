import UserActionTypes from "./action-types";

const initialState = {
  currentId: "",
  type: "",
};

const IdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.ATUALIZAR_Id:
      return {
        ...state,
        currentId: action.payload,
        type: "Movie",
      };
    case UserActionTypes.ATUALIZAR_IdANIME:
      return {
        ...state,
        currentId: action.payload,
        type: "Anime",
      };
    case UserActionTypes.ATUALIZAR_IdSeries:
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
