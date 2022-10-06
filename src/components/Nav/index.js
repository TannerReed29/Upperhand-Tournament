import React from 'react';
import { Link } from "react-router-dom"

// NEED TO FIX NAV SPACING COLORS AND THE WHITE BAR

function Nav() {

  return (
    <nav className='navbar navbar-expand-lg'>
        <ul className='nav nav-tabs justify-content-center'>
            <li className='nav-item mx-2'>
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/news">News</Link>
            </li>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/rules">Rules</Link>
            </li>
            <li className='nav-item mx-2'>
                <Link className='nav-link' to="/bracket">Bracket</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;