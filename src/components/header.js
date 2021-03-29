import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const style = {
  color: 'white',
  'textDecoration': 'none'
};

function Header(props) {
  //const { data} = props;
  return (
      <header>
        <nav>
          <ul>
            <ul className="menuul">
            <li><Link to="/"style={style}>Home</Link></li>
            <li><Link to="/signup" style={style}>Sign-up</Link></li>
            <li><Link to="/signin"style={style}>Sign-in</Link></li>
            </ul>
          </ul>
        </nav>
       
                 </header>
    );
}
  export default Header;
  