import React from 'react';
import './Header.css';

const Header = () => (
    <div className="header">
      <nav className="navbar navbar-light">
        <a className="nav-link active" id="navLink" href="/">SIGN UP</a>
            <ul className="nav justify-content-center">
                <a className="navbar-brand" href="/">
                    <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="Yama Logo"/>
                    YAMA FISHING
                    </a>
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                     <a className="nav-link active" id="navLink" href="/">SIGN IN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="navLink" href="/">BLOG</a>
                </li>
            </ul>
        </nav>
      </div>
);

export default Header;
