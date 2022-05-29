import React from 'react';

import '../style/components/header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">Elo</div>
      <div className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </div>
    </header>
  )
}
