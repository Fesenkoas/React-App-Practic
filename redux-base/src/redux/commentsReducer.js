import {COMMENT_CREATE } from './types';

const intialState = {
comments:[]
};

export const commentsReducer = (state = intialState, action) => {
    switch(action.type){
        case COMMENT_CREATE:
            return{
                ...state,
                 comments:[ ...state.comments,action.data]
            }
            default:
                return state;
    }
};
