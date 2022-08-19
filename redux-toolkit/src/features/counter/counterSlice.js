import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count +=1;
        },
        deincrement: (state) => {
            state.count -=1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state,action) =>{
            state.count += action.payload;
        }
    }
})

export const {increment, deincrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;