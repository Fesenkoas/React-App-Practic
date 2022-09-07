import {INPUT_TEXT, LOADER_DISPLAY_ON } from './types';

const intialState = {
loading: false
};

export const appReducer = (state = intialState, action) => {
    
    switch(action.type){
        case LOADER_DISPLAY_ON:
            return{
                ...state,
                 text: action.text
            }
            case INPUT_TEXT:
                return{
                    ...state,
                     text: action.text
                }
            default:
                return state;
    }
};
