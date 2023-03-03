import { CATEGORY_TYPE } from "./category-type";

const initial_category = { 
        category_data : {}
    };

export const CategoryReducer = (state = initial_category, action) => {
    const {type, payload} = action;
    switch (type){
        case CATEGORY_TYPE.SET_CATEGORY: 
            return {...state,
                category_data: payload
                }
        default:
            return state;
    }
}