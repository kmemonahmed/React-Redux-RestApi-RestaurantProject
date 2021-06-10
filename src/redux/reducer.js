import COMMENTS from '../data/comments'
import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes'
import {InitialContactForm} from './forms';
import {createForms} from 'react-redux-form';

const dishReducer = (dishstate = {isLoading: false, dishes: [], errMess: null}, action) =>{
    switch(action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishstate,
                isLoading: true,
                errMess: null,
                dishes: []
            }

        case actionTypes.LOAD_DISHES:
            return {
                ...dishstate,
                isLoading:false,
                errMess: null,
                dishes: action.payload
            }
        case actionTypes.DISHES_FAILED:
            return {
                ...dishstate,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
            
        default:
            return dishstate;
    }
}

const commentReducer = (commentState = {isLoading: true, commtents: []}, action) => {
    switch(action.type){
        case actionTypes.LOAD_COMMENTS:
            return{
                ...commentState,
                isLoading:false,
                comments: action.payload
            };

        case actionTypes.COMMENT_LOADING:
            return{
                ...commentState,
                isLoading:true,
                comments:[]
            };
            
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})
