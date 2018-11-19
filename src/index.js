import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers/index';
import rootSaga from './sagas/sagas'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from './App';
import Counter from './components/Counter';
import NotFound from './components/NotFound';

//Redux Saga configuration
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
             <Route exact path="/" component={App} /> 
             <Route exact path="/counter" component={Counter}/>
             <Route component={NotFound}/>
             </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
