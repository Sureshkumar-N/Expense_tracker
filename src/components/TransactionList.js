
import {useSelector} from 'react-redux';
import Transaction from "./Transaction";
const TransactionList = () =>{
    const transactions = useSelector((state)=>state.transaction.transactions);
    return(
        <div>
            <h3>History</h3>
            <ul  className="list">
                {transactions.map((transaction,i) => (
                    <Transaction key={transaction.id} transaction={transaction} i={i}/>
                ))}
            </ul>
        </div>
    );
}
export default TransactionList;