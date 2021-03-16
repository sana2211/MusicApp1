import React from "react";
import { Link } from "react-router-dom";
import './header.css';


const style = {
    color: 'white',
    'text-decoration': 'none'
};

function DashboardHeader(props) {
  return (
      <header>
        <nav>
          <ul>
            <ul className="menuul">
            <li><Link to="/" style={style}>Welcome {props.email}</Link></li>
            <li><Link to="/signin" style={style}>Sign out</Link></li>
            </ul>
          </ul>
        </nav>
       
                 </header>
    );
}
  export default DashboardHeader;
