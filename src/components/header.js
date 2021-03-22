import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header(props) {
  const {content} = props;
  return (
      <header>
        <nav id="left-nav">
          <ul>
            <ul className="menuul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
            </ul>
          </ul>
        </nav>
       
                 </header>
    );
}
  export default Header;
  