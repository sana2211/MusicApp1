import React from "react";
import { Link } from "react-router-dom";
import './header.css';



function Header(props) {
  //const { data} = props;
  return (
    
        <nav>
          <ul>
            <ul className="menuul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign-up</Link></li>
            <li><Link to="/signin">Sign-In</Link></li>

            </ul>
          </ul>
        </nav>
   
   
       
    );
}
  export default Header;
  