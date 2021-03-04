import React from "react";
import Header from "./header";

export default class SignUp extends React.Component {
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <Header></Header>
        <div className="header">SignUp</div>
        <div className="content">
          
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
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            signUp
          </button>
        </div>
      </div>
    );
  }
}
