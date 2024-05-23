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
    <section className="investment-details" style={{display:'block'}}>
      <div className="strategy">
        <h3>Conservative</h3>
        <p>10-14% Interest Rate</p>
        <p className="status active">Active</p>
        <p>1500 SAR Max. Investment</p>
        <p>26 Loans Funded</p>
        <button className="stop">Stop</button>
        <button className="change-settings">Change Settings</button>
        <p className="start-date">* Strategy started at 20th March 2021</p>
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