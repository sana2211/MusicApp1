import React from "react";
import Header from "./header";
import styles from "./login.css";
import Footer from "./footer";

export default class AddMusic extends React.Component {

  state = {
    title: '',
    artist: '',
    url:  ''
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
      //Add validation
    evt.preventDefault();
    fetch('http://localhost:8000/api/users', {
      method: 'POST',
      body: JSON.stringify({
        'title': this.state.fullname, 
        'artist': this.state.email,
        'url': this.state.password
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
        <h2>Add music</h2>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="fullname" placeholder="fullname" />
            </div>
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="password" name="text" placeholder="password" />
            </div>
            <div className="form-group">
             <button>Add</button>
             <button>Save</button>
             <button>Delete</button>
            </div>
            <br></br>
          </div>
          </form>
          <Footer></Footer>
            </div>

    );
  }
}
