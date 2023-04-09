import { createContext,useReducer } from "react";
import AppReducer from './AppReducer';
//Initial state
const initialState={
    transactions: [
        {id:1, text:'flower',amount:-20},
        {id:2, text:'salary',amount:300},
        {id:3, text:'book',amount:-10},
        {id:4, text:'camera',amount:150}
    ]
}
// create context
export const GlobalContext= createContext(initialState);
// provider component
const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);
    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
export default GlobalProvider;