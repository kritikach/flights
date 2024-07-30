import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="location-request">
        <p>www.sampleairlines.com wants to know your location</p>
        <button>Allow</button>
        <button>Block</button>
      </div>
      <div className="search-flight">
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="date" />
        <button>Search Flight</button>
      </div>
    </header>
  );
};

export default Header;
