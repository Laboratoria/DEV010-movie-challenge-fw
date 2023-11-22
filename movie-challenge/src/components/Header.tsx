// Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ onSearch }) => (
  <nav>
    <form className='search-container'>
      <input type="text" onChange={(e) => onSearch(e.target.value)} />
    </form>
  </nav>
);

export default Header;
