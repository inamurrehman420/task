import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
      <nav className="top-nav">
<div className="nav-links">
  <a href="/">Overview</a>
  <a href="/">Invest</a>
  <a href="/">Auto-Invest</a>
  <a href="/">My Portfolio</a>
</div>
<div className="nav-right">
  <span>En</span>
  <div className="notifications">
    <i className="bell-icon"></i>
    <span className="notification-count">2</span>
  </div>
  <div >
    <i className="profile-icon"></i>
  </div>
</div>
</nav>
  )
}

