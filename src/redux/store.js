import {createStore} from 'redux';
import { Reducer } from './reducer';

const mystore = createStore(Reducer)

export default mystore