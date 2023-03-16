import { CATEGORY_TYPE } from "./category-type";

const initial_category = { 
        category_data : {},
        isLoading: false,
        error: null
    };

export const CategoryReducer = (state = initial_category, action) => {
    const {type, payload} = action;
    switch (type){
        case CATEGORY_TYPE.SET_CATEGORY_START: return { ...state, isLoading: true }
        case CATEGORY_TYPE.SET_CATEGORY_FAIL: return {...state, isLoading: false, error: payload}
        case CATEGORY_TYPE.SET_CATEGORY_SUCCESS: 
            return {...state,
                isLoading: false,
                category_data: payload
                }
        default:
            return state;
    }
}