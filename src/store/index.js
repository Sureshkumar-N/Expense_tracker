import { configureStore,createSlice } from "@reduxjs/toolkit";
const initialTransaction={
    transactions: [
        {id:1, text:'flower',amount:-20},
        {id:2, text:'salary',amount:300},
        {id:3, text:'book',amount:-10},
        {id:4, text:'camera',amount:150}
    ]
}
const transactionSlice=createSlice({
    name:"transaction",
    initialState:initialTransaction,
    reducers:{
        addTransaction(state,action){
            state.transactions.push(action.payload);
        },
        deleteTransaction(state,action){
            state.transactions.splice(action.payload,1);
        }
    }
});

export const actions =transactionSlice.actions;

export const store=configureStore({
    reducer:{
        transaction:transactionSlice.reducer
    }
});