import React , {useContext} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext} from '../contextapis/GlobalState'
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>( 


<Transaction transaction={transaction} key={transaction.id} />
                    
                ))}
                
            </ul>
        </div>
    )
}
