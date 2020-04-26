import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducer/index';
import App from './App';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
render(
    <Provider store={store}>
        <App />

    </Provider>
    ,
    document.getElementById('root')
);