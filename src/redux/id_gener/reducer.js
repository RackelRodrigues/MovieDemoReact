import UserActionTypes from "./action-types";

const initialState = {
    currentId: '',

  };

const IdReducer = (state = initialState, action) => {
    switch (action.type) {
      case UserActionTypes.ATUALIZAR_Id:
        return {
          ...state,
          currentId: action.payload,
        };
      default:
        return state;
    }
  };

  




export default IdReducer;