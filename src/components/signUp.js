import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class SignUp extends React.Component {

  state = {
   
  }
  render() {
    return (
      <div>
        <Header></Header><br/><br></br>
        <h1>Sign up</h1>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container">
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="fullname" placeholder="fullname" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="email" placeholder="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="password" name="password" placeholder="password" required/>
            </div>
            <div className="form-group">
             <button>Sign Up</button>
            </div>
            <br></br>
          </div>
          </form>
          <Footer></Footer>
            </div>

    );
  }
}
