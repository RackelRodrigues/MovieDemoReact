import UserActionType from "./action.types";

const initialState = {
    currentScreen: '',

  };

const ScreenName = (state = initialState, action) => {
    switch (action.type) {
      case UserActionType.ATUALIZAR_SCREEN:
        return {
          ...state,
          currentScreen: action.payload,
        };
      default:
        return state;
    }
  };

  




export default ScreenName;