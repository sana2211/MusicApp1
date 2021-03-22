import React, { Component } from 'react';
import styles from "./GetMusic.css";

class Getmusic extends Component {
    state = { data: [] }
    async fetchAPI() {
        const a = window.location.href.split('/');
  const id = a[a.length - 1]
  console.log(id);
        const baseURL1 = 'http://localhost:8000/api/bookmarks/'+id;
        const response = await fetch(baseURL1);
        const data = await response.json();
        console.log(data);
        this.setState({
            data: data
        })
      }
      componentDidMount()
      {
        this.fetchAPI();
      }
    render() { 
        return ( 
            <div>
                <p>Get music</p>
                <ul>
                    
                {
                this.state.data.map((item)=>{
                    return (<div>
                            <li>URL: {item.url}</li>
                            <li>ARTIST: {item.artist}</li>
                            <li>TITLE: {item.title}</li>
                            <button>Delete</button>
                            <br></br>
                            </div>
                    )
                })
                 }
                 </ul>
            </div>
         );
    }
}
 
export default Getmusic;