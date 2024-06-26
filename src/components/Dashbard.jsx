import React from 'react';
import './Dashboard.css';
import NavBar from './NavBar';
import RiskPieChart from './PieChar';
import BarChart from './BarChart';
const AutoInvest = () => {   
      return( 

<>
     <NavBar/>
     <div className="auto-invest"style={{display:'block'}} >
    <header>
      <h2>Auto Investment</h2>
      <div className="status">
        <span>Active</span>
        <label className="switch">
          <input type="checkbox" checked readOnly />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
    <section className="investment-details" style={{display:'block', Position:'absolute'}}>
      <div className="container px-0 my-5">
        <div className="card d-flex flex-row align-items-center">
          <div className="interest-rate col-md-3 px-2 align-content-center">
            <h3>Conservative</h3>
            <p>10-14%</p>
            <p>Interest Rate</p>
          </div>
          <div className="col-md-9 d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="ps-5" >
                <p className="status text-access fw-bold">Active</p>
                <p className="text-left">Status</p>
              </div>
              <div>
                <p className="fw-bold">1500 SAR</p>
                <p className="text-left">Max. Investment</p>
              </div>
              <div>
                <p className="fw-bold">26</p>
                <p className="text-left">Loans Funded</p>
              </div>

            </div>
            <div className="d-flex align-items-end justify-content-end mt-3">
              <button className="btn btn-stop me-3">Stop</button>
              <button className="btn btn-settings">Change Settings</button>
            </div>
            <p className="text-muted mt-3 ps-5 ">* Strategy started at 20th March 2021</p>
          </div>
        </div>
      </div>
      <div className="charts"style={{alignItems:'space-between'}}>
        <div className="invested ">
          <h4>Invested</h4>
          <BarChart />

        </div>
        <div className="risk-distribution">
          <h4>Excepted Risk Score Distribution</h4>
          <RiskPieChart  />
        </div>
      </div>
    </section>
  </div>
  </> 
  )
};


export default AutoInvest
