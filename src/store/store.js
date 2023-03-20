/*
// import { createStore, compose, applyMiddleware } from 'redux';
// // import {configureStore} from 'react-toolkit'
// import logger from 'redux-logger'; 
// // import thunk from 'redux-thunk';
// import { rootReducer } from './root-reducer';
// // import storage from 'redux-persist/lib/storage';
// // import { persistStore, persistReducer } from 'redux-persist';

// // // redux saga
// // import createSagaMiddleware from 'redux-saga';
// // import { rootSaga } from './root-saga';


// // import  createLogger  from 'redux-logger'
// // const logger = createLogger();
// // const store = createStore(
// //     reducers,
// // );

// const middleWare = [ process.env.NODE_ENV === 'development' && logger ].filter(Boolean);



// // const middlewareSaga = createSagaMiddleware();
// // const middleWare = [ process.env.NODE_ENV === 'development' && logger, middlewareSaga].filter(Boolean);


// // const composedEnhancer = compose( applyMiddleware({...middleWare}) );
// const composedEnhancer = compose  ;

// // const persistConfig = {
// //     key: 'root',
// //     storage,
// //     blacklist: ['user'],
// //     whitelist: ['cart']
// // };

// // const persistReducer_ = persistReducer(persistConfig, rootReducer);
// // export const store = createStore(persistReducer_ , undefined, composedEnhancer( applyMiddleware(...middleWare)) );
// // middlewareSaga.run(rootSaga);
// // export const persistStore_ = persistStore(store);


// export const store = createStore(rootReducer , undefined, applyMiddleware( logger ));


*/


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';


export const middleWares  = [ process.env.NODE_ENV === 'development' && logger ].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer,
    // toolkit default includes 3 middle ware by default 
    // 1. thunk (promise based action) 2. 3.
    // so are replacing default with loggers.
    
    // middleware: middleWares


    // modify the default middleware
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        // serializableCheck check that action and reducers are plain js with constructor, function, 
        serializableCheck: false
    }).concat(middleWares) // add our custom middleware with default middleware


})