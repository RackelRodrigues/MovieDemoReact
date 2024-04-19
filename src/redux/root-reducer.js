import { combineReducers } from "redux";
import IdReducer from "./id_gener/reducer";
import ScreenName from './Screen/recducer';
import StarRating from "./StarRating/reducer";

const rootReducer = combineReducers({
    IdReducer,
    ScreenName,
   StarRating,
})

export default rootReducer;