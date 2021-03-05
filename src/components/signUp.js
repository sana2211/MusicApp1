import React from "react";
import Header from "./header";
import styles from "./login.css";
import Footer from "./footer";

export default class SignUp extends React.Component {

  state = {
    fullname: '',
    email: '',
    pasword:  ''
  }

  handleInput(evt)
  { 
    //console.log(evt.currentTarget.value);
    const {name, value} = evt.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(this.state.fullname);
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:8000/api/users', {
      method: 'POST',
      body: JSON.stringify({
        'fullname': this.state.fullname, 
        'email': this.state.email,
        'password': this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(result=>console.log(result.json()))
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div>
        <Header></Header>
        <h1>Sign up</h1>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="fullname" placeholder="fullname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="password" name="password" placeholder="password" />
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
