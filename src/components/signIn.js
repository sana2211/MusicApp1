import React from "react";
import Header from "./header";
import styles from "./login.css";
import Footer from "./footer";

export default class SignIn extends React.Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Sign in</h1>
          <div className="form">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
             <button>Sign In</button>
            </div>
            <br></br>
          </div>
          <Footer></Footer>
            </div>

    );
  }
}
