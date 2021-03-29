import React, { Component } from 'react';
import './GetMusic.css';

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

      handleDelete = (musicid) =>
      {
        fetch(`http://localhost:8000/api/bookmarks/${`${musicid}`}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (!res.ok) {
              return res.json().then(error => {
                // then throw it
                throw error
              })
            }
            alert('Deleted!');
            this.fetchAPI();
          })
          .catch(error => {
            console.error(error)
          });
    }


    render() { 
        return ( 
                //<h2>Get music</h2>
                <div className="row-flex">
                <h2>GET MUSIC</h2>

                <div className="song-list-container">
                <h2 className="category-header" id="song-list-header">

                  <div className="title-header top-header" >Title</div>
                  <div className="artist-header top-header">Artist</div>
                  <div className="URL-header top-header">URL</div>

       </h2>
                </div>
                <ul className="getmusicul">
                    
                {
                this.state.data.map((item)=>{
                    return (<div className="song-list-container" key={item.id}>
                        
                            <li> {item.title}</li>
                            <li> {item.artist}</li>
                            <li> {item.url}</li>
                            <button onClick={()=>this.handleDelete(item.id)}>Delete</button>
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