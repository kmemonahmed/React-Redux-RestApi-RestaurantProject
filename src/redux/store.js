import {createStore, applyMiddleware} from 'redux';
import { Reducer } from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const mystore = createStore(Reducer, applyMiddleware(logger, thunk));

export default mystore