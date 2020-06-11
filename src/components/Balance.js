import React, { useContext } from 'react'
import { GlobalContext } from '../contextapis/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (

        <div className="baba">
            <h2>Your Current Balance </h2>
            <h1>${total}</h1>
            </div>
    )
}
