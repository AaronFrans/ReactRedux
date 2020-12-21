import { createSlice } from '@reduxjs/toolkit';


const checkedSlice = createSlice({

    name: "checked",
    initialState: {value: true},

    reducers:{
        setToTrue: (state)=> {state.value = true},
        setToFalse: (state)=> {state.value = false},
    }
})

export const {actions, reducer} = checkedSlice;
export const { setToTrue, setToFalse } = actions;