import { BUY_VEGETABLE } from "./vegetableType"

const initialState= {
    Number_Of_Vegetable : 20
}

 const vegetableReducer= (state= initialState, action)=>{
    switch(action.type){
        case BUY_VEGETABLE:
            return{
                ...state,
                Number_Of_Vegetable:state.Number_Of_Vegetable-1
            }
            default: return state
    }
}

export default vegetableReducer