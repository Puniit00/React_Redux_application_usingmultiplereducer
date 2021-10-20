import { combineReducers } from "redux";
import fruitReducer from "./Fruit/fruitReducer";
import vegetableReducer from "./Vegetables/vegetableReducer";

const rootReducer= combineReducers({
    fruitReducer: fruitReducer,
    vegetableReducer: vegetableReducer
})

export default rootReducer