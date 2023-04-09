import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Balance(){
    const {transactions} =  useContext(GlobalContext);
    const amounts= transactions.map(transaction => transaction.amount);
    const total=amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    return(
        <div>
            <h3>Your Balance</h3>
            <h2 id="balance">${total}</h2>
        </div>
    );
}