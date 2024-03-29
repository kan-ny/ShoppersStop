import { all, call } from 'redux-saga/effects';
import { categorySaga } from './categoryReducer/category-saga';
import { userSaga } from './userReducer/user-saga';

export function* rootSaga () {
    yield all([ call(categorySaga), call(userSaga) ]);
}