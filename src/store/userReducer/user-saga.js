import { all, call, put, takeLatest } from 'redux-saga/effects';
import { USER_TYPE } from './user-types';
import { getCurrentUser, createUserDoc, signInWithGooglePopup, signInAuthWithEmainAndPassword, createAuthUserWithEmailAndPassword, userSignOut } from '../../utils/firebase.utils';
import { signin_success, signin_fail, signup_success, signup_fail, signout_fail, signout_success } from './user-action';



export function* getUserSnap(userAuth, additionalDetails){
    try {
       const userSnap =  yield call(
        createUserDoc, 
        userAuth, 
        additionalDetails
        );
       yield put( signin_success( {id:userSnap.id, ...userSnap.data() } ))
    } catch (error) {
        yield put(signin_fail(error));
    }
}


export function* emailSignin({payload: { email, password } }){
   
   try {
        console.log('test ...', email, password);
       const { user } = yield call(signInAuthWithEmainAndPassword, email, password);
        console.log('test ...', user);
       yield call(getUserSnap, user);
   } catch (error) {
    yield put(signin_fail(error));
   } 

}

export function* userStatus(){
    try{
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getUserSnap, userAuth);
    }catch(error){
        yield put(signin_fail(error));
     }
}


export function* googlePopup(){
    try {
        const { user }  = yield call(signInWithGooglePopup)
        yield call(getUserSnap, user);
    } catch (error) {
        put(signin_fail(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
    console.log('signInAfterSignUp', user, additionalDetails );
    yield call(getUserSnap, user, additionalDetails);
  }
  
export function* signout(){
    try {
       yield call(userSignOut);
       yield put(signout_success());
    } catch (error) {
       yield put(signout_fail());
    }
}

export function* signup_({payload: {username, password, displayName}}){
    try {
         const { user } = yield call(createAuthUserWithEmailAndPassword, username, password );
        console.log('... signup_', user);
        yield put(signup_success(user, {displayName}) );
        console.log('... signup_ 2', user);
        } catch (error) {
            console.log('... err', error);
        yield put(signup_fail(error));
    }
}

export function* signupStart(){
    yield takeLatest(USER_TYPE.SIGNUP_START, signup_);
}

export function* signupSuccess(){
    yield takeLatest(USER_TYPE.SIGNUP_SUCCESS, signInAfterSignUp)
}

export function* googleSigninStart(){
    yield takeLatest(USER_TYPE.GOOGLE_SIGNIN, googlePopup)
}

export function* onCheckUserStatus(){
    yield takeLatest(USER_TYPE.CHECK_USER_SESSION, userStatus)
}

export function* emailSigninStart(){
    yield takeLatest(USER_TYPE.EMAIL_SIGNIN, emailSignin);
}

export function* signoutStart(){
    yield takeLatest(USER_TYPE.SIGNOUT_START, signout);
}

export function* userSaga(){
    yield all([ call(onCheckUserStatus), call(googleSigninStart), call(emailSigninStart), call(signupSuccess), call(signupStart), call(signoutStart) ])
}