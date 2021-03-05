import React from "react";
import Header from "./header";
import styles from "./login.css";
import Footer from "./footer";

export default class SignUp extends React.Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Sign up</h1>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
             <button>Sign Up</button>
            </div>
            <br></br>
          </div>
          <Footer></Footer>
            </div>

    );
  }
}
