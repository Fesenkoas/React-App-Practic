import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from "./types";

export function incrementLike(){
    return {
        type: INCREMENT
    }
} 

export function decrementLike(){
    return {
        type: DECREMENT
    }
} 

export function inputText(text){
    return {
        type: INPUT_TEXT,
        text
    }
} 

export function commentCreate(text, id){
    return {
        type: COMMENT_CREATE,
        data:{text, id}
    }
}

export function commentUpdate(text, id){
    return {
        type: COMMENT_UPDATE,
        data:{text, id}
    }
}
export function commentDelete( id){
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function commentLoad(){
    return async dispatch => { 
        const responce = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const data = await responce.json();
        dispatch({
            type:COMMENTS_LOAD,
            data
        })

    }
}