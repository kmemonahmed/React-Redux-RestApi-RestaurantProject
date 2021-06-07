import COMMENTS from '../data/comments'
import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes'

const dishReducer = (dishstate = {isLoading: false, dishes: []}, action) =>{
    switch(action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishstate,
                isLoading: true,
                dishes: []
            }

        case actionTypes.LOAD_DISHES:
            return {
                ...dishstate,
                isLoading:false,
                dishes: action.payload
            }
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
