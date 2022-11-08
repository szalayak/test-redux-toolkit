import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: App = {
    counter: 0,
    clicks: []
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        addClick(state, action: PayloadAction<string>) {
            state.clicks.push(action.payload);
        },
        reset(state){
            state.clicks = [];
            state.counter = 0;
        }
    }
})

export const { increment, decrement, addClick, reset } = appSlice.actions
export default appSlice.reducer