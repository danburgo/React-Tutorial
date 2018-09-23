import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import reducer from "./store/reducer"; //1 reducer

import reducerA from "./store/reducerA"; 
import reducerB from "./store/reducerB"; 

//import {createStore} from "redux"; //1 reducer
import {createStore, combineReducers} from "redux"; //2 reducers
import {Provider} from "react-redux";

//const store = createStore(reducer);//1 reducer

//2 reducers:
const rootReducer =combineReducers({
    rA: reducerA,
    rB: reducerB
});
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();
