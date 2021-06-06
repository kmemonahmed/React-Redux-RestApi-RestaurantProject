import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes'

const dishReducer = (dishstate = DISHES, action) =>{
    switch(action.type) {
        default:
            return dishstate;
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch(action.type){
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment)
        default:
            return commentState;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})
