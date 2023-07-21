import React from 'react';
import { Link } from 'react-router-dom';
import userprofile from '../images/user-profile-svgrepo-com.svg';

const Header = () => (
  <header className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-5">
      <div className="container">
        <h1 className="display-4">BookStore CMS</h1>

        <div className="navbar-collapse">
          <ul className="navbar-nav m-3">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={userprofile} alt="User Profile" className="nav-link" />
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
);

export default Header;
