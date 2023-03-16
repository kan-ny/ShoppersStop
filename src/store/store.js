import { createStore, compose, applyMiddleware } from 'redux';
// import configureStore from 'react-toolkit'
import logger from 'redux-logger'; 
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// import  createLogger  from 'redux-logger'
// const logger = createLogger();
// const store = createStore(
//     reducers,
// );

const middleWare = [ process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean);

// const composedEnhancer = compose( applyMiddleware({...middleWare}) );
const composedEnhancer = compose  ;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
    whitelist: ['cart']
};

const persistReducer_ = persistReducer(persistConfig, rootReducer);


// export const store = createStore(rootReducer , undefined, applyMiddleware(logger));
export const store = createStore(persistReducer_ , undefined, composedEnhancer( applyMiddleware(...middleWare)) );

export const persistStore_ = persistStore(store);


