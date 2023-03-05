import React from 'react';
import PropTypes from 'prop-types';


const Transaction = ({type, concept, account, category, money, date}) => {
    return (
        <>
            <div className={`transaction ${type ? "income" : "expense"}`}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="text-long">{concept}</p>
                        <p className="text-long"><span className="fa-solid fa-user"></span> {account} - {category}</p>
                    </div>
                    <div className="col-md-4">
                        <div className="row align-items-center">
                            <div className="col-2 p-0">
                                <span className="fs-1 lh-lg fw-bold text-white fa-solid fa-dollar-sign"></span>
                            </div>
                            <div className="col-8">
                                <p className="text-long">{money}</p>
                                <p>{date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 pe-0">
                        <span className={`fs-1 lh-lg fw-bold text-white fa-solid ${type ? "fa-plus" : "fa-minus"}`}></span>
                    </div>
                </div>
            </div>
        </>
    );
};


Transaction.propTypes = {
    type: PropTypes.bool,
    concept: PropTypes.string,
    account: PropTypes.string,
    category: PropTypes.string,
    money: PropTypes.number,
    date: PropTypes.string,
};

