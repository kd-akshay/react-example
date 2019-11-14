import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from'./store/reducer';
import App from './app';

const store=createStore(Reducer);

render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));