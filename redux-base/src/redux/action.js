import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE } from "./types";

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