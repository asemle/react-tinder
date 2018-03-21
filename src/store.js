import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer.js';
import reduxPromiseMiddleWare from 'redux-promise-middleware';


export default createStore(reducer, applyMiddleware(reduxPromiseMiddleWare()));