import { CATEGORY_TYPE } from "./category-type";
import { getCollectionAndDoc } from "../../utils/firebase.utils";
import { createAction } from "../../utils/create-action";


export const categoryActionstart = () => ({type: CATEGORY_TYPE.SET_CATEGORY_START})
export const categoryActionsuccess = ( dataArray ) => ({type: CATEGORY_TYPE.SET_CATEGORY_SUCCESS, payload: dataArray})
export const categoryActionfail = ( error ) => ({type: CATEGORY_TYPE.SET_CATEGORY_FAIL, payload: error})

// // redux thunk
// export const setCategoryDataAsync = () => {
//   return async (dispatch) => {
//     dispatch(c_start());
//     try {
//       const category_data = await getCollectionAndDoc();
//       dispatch(c_success(category_data));
//     } catch (error) {
//       dispatch(c_fail(error));
//     }
//   };
// };




// export const setCategoryDataAsync = (payload) => (
//   {
//     type: CATEGORY_TYPE.SET_CATEGORY_START,
//     payload: payload
// }
// );



// export const fetchCategoriesStart = () =>
//   createAction(CATEGORY_TYPE.SET_CATEGORY_START);

// export const fetchCategoriesSuccess = (categoriesArray) =>
//   createAction(
//     CATEGORY_TYPE.SET_CATEGORY_SUCCESS,
//     categoriesArray
//   );

// export const fetchCategoriesFailure = (error) =>
//   createAction(CATEGORY_TYPE.SET_CATEGORY_FAIL, error);

// export const setCategoryDataAsync  = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCollectionAndDoc();
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
