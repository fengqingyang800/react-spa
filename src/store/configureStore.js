/**
 * @file configureStore.js
 * @author deo
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index';

// let createStoreWithMiddleware;
// store负责管理所有reducer，module.hot.accept表示支持热更新
const logger = createLogger({ collapsed: true });
// createStoreWithMiddleware = (createStore);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            logger
        )
    );

    return store;
}
