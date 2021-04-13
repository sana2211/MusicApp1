import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
  state = {
  
  }

 
      
  render() {
    return (
      <div>
        <Header></Header><br></br>
        <h1>Sign in</h1>
        <form>
          <div className="flex-container">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" required/>
            </div>
            <div className="form-group">
             <button><Link to="/dashboard">Sign In</Link></button>
            </div>
            <br></br>
          </div>
          </form>

          <Footer></Footer>
          </div>
    );
  }
}
