import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: state => {
            state.count = state.count + 1;
        },
        decrement: state => {
            if (state.count ){
                state.count = state.count - 1;
            }
        },
        reset: state => {
            state.count = 0;
        },
        incraseBy5: (state, actions) => {
            state.count = state.count + actions.payload
        }
    }
});
export const {increment, decrement, reset, incraseBy5 } = counterSlice.actions;
export default counterSlice.reducer;