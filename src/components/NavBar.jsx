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
<div className="nav-right me-4">
  <span>En</span>
  <div className="notifications">
    <img src="bell.png" alt="Illustration" className="img-fluid text-center bell-icon" />

  </div>
  <div >
    <img src="avatar.png" alt="Illustration" className="img-fluid text-center bell-icon" />
  </div>
</div>
</nav>
  )
}

