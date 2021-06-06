import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import {combineReducers} from 'redux';

const dishReducer = (dishstate = DISHES, action) =>{
    return dishstate;
}

const commentReducer = (commentState = COMMENTS, action) => {
    if (action.type === 'ADD_COMMENT'){
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            console.log(comment)
            return commentState.concat(comment)
        }
    return commentState;
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})
