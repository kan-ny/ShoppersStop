import { CATEGORY_TYPE } from "./category-type";

export const setCategoryData = (payload) => (
      {
        type: CATEGORY_TYPE.SET_CATEGORY,
        payload: payload
    }
);