import React from "react";
import './login.css';


export default class AddMusic extends React.Component {
  state = {
    title: '',
    artist: '',
    url:  ''
  }

  handleInput(evt)
  { 
    
    const {name, value} = evt.currentTarget;
    this.setState({
      [name]: value,
    });
   
  }
  handleSubmit = (evt) => {
      //Add validation
  const a = window.location.href.split('/');
  const id = a[a.length - 1]
  console.log(id);

    evt.preventDefault();
    if(!this.state.title)
    {
      alert("Title is Required");
      return false;
    }
    fetch('https://damp-anchorage-18605.herokuapp.com/api/bookmarks/'+id, {
      method: 'POST',
      body: JSON.stringify({
        'user_id': id,
        'title': this.state.title, 
        'artist': this.state.artist,
        'url': this.state.url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //.then(result=>console.log(result.json()))
    .then(response=>response.json())
    .then(response=>
      {
        if(response)
        {
          alert("Music Added!");
          window.location.reload();
        }
      })
    .catch(err=>console.log(err))
  }
  render() {
    //const { music } = this.props

    return (
      <div>
        <h2>Add music 
          <br></br>
        <i className="fas fa-music"></i>
        </h2>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
        <div className="flex-container">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="title" placeholder="title" />
            </div>
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="artist" placeholder="artist" />
            </div>
            <div className="form-group">
              <label htmlFor="url">Url</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="url" placeholder="url" />
            </div>
            <div className="form-group">
             <button>Add</button>
            </div>
            <br></br>
          </div>
          </form>  

             </div>

    )};
}
