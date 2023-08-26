import {useDispatch} from 'react-redux';
import { actions } from "../store/index.js";
const Transaction = ({transaction,i}) => {
    const dispatch=useDispatch();
    const sign = transaction.amount <0 ? '-' : '+';
    return (
        <li className={transaction.amount <0 ? 'minus': 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button 
            onClick={() => dispatch(actions.deleteTransaction(i))}
            className="delete-btn">X</button>
        </li> 
    );
}

export default Transaction;
