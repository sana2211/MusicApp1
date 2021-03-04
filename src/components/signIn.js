import React from "react";
import Header from "./header";
import styles from "./login.css";
export default class SignIn extends React.Component {
 

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <Header></Header>
        <div className="header">Sign In</div>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}
