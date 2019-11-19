import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducer from'./store/reducer';

import createSagaMiddleware from 'redux-saga';
import {ageWatcher} from './saga/sagas'
import App from './app';

const sagaMiddleware=createSagaMiddleware();

const store=createStore(Reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(ageWatcher);


render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));