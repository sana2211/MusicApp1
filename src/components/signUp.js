import React from "react";
import Header from "./header";
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
    fetch('https://damp-anchorage-18605.herokuapp.com/api/users', 
    {
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
    .then(result=>{
      if(result.ok){
        alert("Thank you for your registration!")
      window.location.replace('/signin')
      }
    })
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div>
        <Header></Header>
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
