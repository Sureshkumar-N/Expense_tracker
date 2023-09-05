import {useSelector} from 'react-redux';
export default function Balance(){
    const transactions=useSelector((state)=>state.transaction.transactions);
    const amounts= transactions.map(transaction => transaction.amount);
    const total=amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    return(
        <div>
            <h3>Your Balance</h3>
            <h2 id="balance">${total}</h2>
        </div>
    );
}