import { createStore, compose, applyMiddleware } from 'redux';
// import configureStore from 'react-toolkit'
import logger from 'redux-logger'; 
import { rootReducer } from './root-reducer';

// import  createLogger  from 'redux-logger'
// const logger = createLogger();
// const store = createStore(
//     reducers,
// );

const middleWare = [logger].filter(Boolean);

const composedEnhancer = compose( applyMiddleware({...middleWare}) );

export const store = createStore(rootReducer , undefined, applyMiddleware(logger));


