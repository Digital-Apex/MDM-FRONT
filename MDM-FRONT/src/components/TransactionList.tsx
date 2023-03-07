import React from 'react'
import { Transaction } from '../models/Transaction.model'
import TransactionCard from './TransactionCard';

interface Props {
    transactions: Transaction[];
}

export default function TransactionList({transactions}: Props) {
    return (
        <div className="transaction-box transaction-box-more">
            {transactions.map((transaction:Transaction) => (
                <TransactionCard transaction={transaction}/>
            ))}
            <div className="transaction-more"><span className=" fa-solid fa-plus"></span></div>
        </div>
    )
}
