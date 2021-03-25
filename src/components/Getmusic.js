import React, { Component } from 'react';

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
        fetch('http://localhost:8000/api/bookmarks/'+ `${musicid}`, {
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
            <div>
                <p>Get music</p>
                <ul className="getmusicul">
                    
                {
                this.state.data.map((item)=>{
                    return (<div key={item.id}>
                            <li>URL: {item.url}</li>
                            <li>ARTIST: {item.artist}</li>
                            <li>TITLE: {item.title}</li>
                            <button onClick={()=>this.handleDelete(item.id)}>Delete</button>
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