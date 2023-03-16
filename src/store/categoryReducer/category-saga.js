import { call, all, put, takeLatest } from 'redux-saga/effects';
import { getCollectionAndDoc } from "../../utils/firebase.utils";
import { CATEGORY_TYPE } from "./category-type";
import { categoryActionsuccess, categoryActionfail } from "./category-action";


export function* fetchAsync(){
    // cant have await in generator(), have to use yield
    // call() parameter 1 takes function name to run and parameter 2 take values to pass 
    try{
        const categoriesArray = yield call(getCollectionAndDoc);
        // cant use dispatch in generator so use put.
        yield put(categoryActionsuccess(categoriesArray));
    }catch(error){
        yield put(categoryActionfail(error));
    }

}

export function* fetchCategory(){
    // receive action, if multiple same actions are running 
    // take the latest one.
    // parameter 1 take actual action type
    // parameter 2 function to do whtn this actoin is triggred 
    yield takeLatest(CATEGORY_TYPE.SET_CATEGORY_START, fetchAsync);
}

export function* categorySaga(){
   yield all([ call(fetchCategory) ]);
}