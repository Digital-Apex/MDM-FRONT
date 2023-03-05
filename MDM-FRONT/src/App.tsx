import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from "./components/header";

import './App.css'

function App() {

  return (
    <div className="App">
        <div className="container">
          <Header></Header>

          <div className="row align-items-center justify-content-center p-2" style="height: calc(100vh - 90px); overflow: hidden;">
              <div className="col-md-4">
                  <div className="row justify-content-center align-items-center">
                      <div className="card card-menu">
                          <span className="fa-solid fa-user"></span>
                      </div>
                      <div className="card card-menu">
                          <span className="fa-solid fa-chart-line"></span>
                      </div>
                      <div className="card card-menu">
                          <span className="fa-solid fa-landmark"></span>
                      </div>
                      <div className="card card-menu">
                          <span className="fa-solid fa-border-all"></span>
                      </div>
                  </div>
                  <br />
                  <div className="transaction-box transaction-box-more">
                      <div className="transaction-more"><span className=" fa-solid fa-plus"></span></div>
                  </div>
              </div>
          </div>

    </div>

    </div>
  )
}

export default App
