import React from 'react';
import logo from '../../img/logo1.png';
import './Header.css'

const Header = () => {
    return (
        <div className="menu">
          <div className="logo-img">
          <img src={logo} alt="" />
          </div>

          <div className="menuItem">

              <nav>
                  <a href="/home">Home</a>
              <a href="/shop">Shop</a>
              <a href="/featured">Feature</a>
              <a href="/pages">Pages</a>
              <a href="/blogs">Blogs</a>
              </nav>
          </div>

          
            
        </div>
    );
};

export default Header;