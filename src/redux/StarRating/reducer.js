
import UserActionType from "./action.types";

const initialState = {
    currentStar: '',

  };

const StarRating = (state = initialState, action) => {
    switch (action.type) {
      case UserActionType.ATUALIZAR_STAR:
        return {
          ...state,
          currentStar: action.payload,
        };
      default:
        return state;
    }
  };

  




export default StarRating;