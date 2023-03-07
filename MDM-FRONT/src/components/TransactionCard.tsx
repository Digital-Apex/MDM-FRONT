import { Transaction } from '../models/Transaction.model'


interface Props{
    transaction: Transaction
}

export default function TransactionCard({transaction}:Props) {
    return (
        <>
        <div className={`transaction ${transaction.type ? 'income':'expense'}`}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <p className="text-long">{transaction.concept}</p>
                    <p className="text-long"><span className="fa-solid fa-user"/> {transaction.account} - {transaction.category}</p>
                </div>
                <div className="col-md-4">
                    <div className="row align-items-center">
                        <div className="col-2 p-0">
                            <span className="fs-1 lh-lg fw-bold text-white fa-solid fa-dollar-sign"/>
                        </div>
                        <div className="col-8">
                            <p className="text-long">{transaction.account}</p>
                            <p>{transaction.date}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 pe-0">
                    <span className={`fs-1 lh-lg fw-bold text-white fa-solid ${transaction.type ? 'fa-plus':'fa-minus'}`}/>
                </div>
            </div>
        </div>
        </>
    )
}
