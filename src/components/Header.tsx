import React from 'react'

export default function Header() {
    return (
        <>
        <div className="row my-3">
            <div className="col-2 h-100 align-self-center">
                <button className="btn-transaction"><span className="w-100 text-long d-block"><span className="fw-bold text-white fa-solid fa-money-bill-transfer"></span> NEW TRANSFER <span className="fw-bold text-white fa-solid fa-plus"></span></span></button>
            </div>
            <div className="col-md-8">
                <div className="row header-finance">
                    <div className="col-md-10">
                        <div className="row justify-content-center align-items-center w-100 text-center">
                            <div className="col-md-3 p-0 fw-bold">
                                <i className="fa-solid fa-user"></i>
                                NEQUI
                            </div>
                            <div className="col-md-3 p-0">
                                <i className="fa-solid fa-arrow-trend-up"></i>
                                4.200.000
                            </div>
                            <div className="col-md-3 p-0">
                                <i className="fa-solid fa-arrow-trend-down"></i>
                                200.200
                            </div>
                            <div className="col-md-3 p-0 fw-bold">
                                <i className="fa-solid fa-dollar-sign"></i>
                                4.000.000
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-0">
                        <div className="row justify-content-center w-100 h-100 align-items center">
                            <div className="col-md-6 pe-0">
                                <div className="dropdown">
                                    <a className="finance-dropmenu-icon text-right" href="#" id="notificationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-envelope position-relative">
                                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                                <span className="visually-hidden">New alerts</span>
                                            </span>
                                        </i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="notificationsDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 ps-0">
                                <div className="dropdown">
                                    <a className="finance-dropmenu-icon" href="#" id="accountsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="accountsDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 h-100 align-self-center">
                <button className="btn-report"><span className="fw-bold text-white fa-solid fa-file-export"></span> REPORT</button>
            </div>
        </div>
        </>
    )
}
