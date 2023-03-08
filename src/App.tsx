
import './assets/css/App.css'
import './assets/css/Finance.css'
import { useState } from 'react';
import { Transaction } from './models/Transaction.model';
import TransactionList from './components/TransactionList';
import Header from "./components/Header";
import MenuCard from './components/MenuCard';
import { Category } from './models/Category.model';


export function App() {

    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            type: true,
            concept: "Salary",
            account: "NEQUI",
            category: "Work",
            money: 3000000,
            date: "01/03/2023"
        },
        {
            type: false,
            concept: "Lasagna",
            account: "BANCOMEVA",
            category: "Food",
            money: 37500,
            date: "05/03/2023"
        }
    ])


    const [categories, setCategories] = useState<Category[]>([
        {
            name: "School",
            porcent: 50,
            icon: "fa-user",
        },
        {
            name: "School",
            porcent: 100,
            icon: "fa-user",
        },
        {
            name: "School",
            porcent: 30,
            icon: "fa-user",
        },
        {
            name: "School",
            porcent: 10,
            icon: "fa-user",
        }
    ])


    return (
        <div className="App">
            <div className="container">
                <Header></Header>
                <div className="row align-items-center justify-content-center p-2 main-panel">
                    {/* 1RS COL */}
                    <div className="col-md-4">
                        <div className="row justify-content-center align-items-center">
                            <MenuCard icon="fa-user"/>
                            <MenuCard icon="fa-chart-line"/>
                            <MenuCard icon="fa-landmark"/>
                            <MenuCard icon="fa-border-all"/>
                        </div>
                        <br />
                        <TransactionList transactions={transactions}/>
                    </div>

                    {/* 2ND COL */}
                    <div className="col-md-6 h-100">
                        <div className="row card-finance mb-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
