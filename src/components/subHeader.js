import React, { Component } from 'react';

class SubHeader extends Component {
    state = {  }
    render() { 
        return (<div>
          		<div className="main-title">
             <h1>Vibrato Music </h1>
             </div>
        <h2>
          Whats life without Music
        </h2>              
            
              <div className="flex-container1">
            <h3>Why use Vibrato Music</h3>
              <img alt = "musicapp" style={{width:'250px', height:'140px'}} src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb%22"></img>
              <i className="fas fa-music landing-icon"></i>
              <p>
               Apple Music, Youtube, Spotify, Dont Know which music to play? Bring it all in one place.
              </p>
              </div>
              <div className="flex-container1">
<h3> What is Vibrato Music </h3>              
              <img alt = "musicapp" style={{width:'250px', height:'auto'}} src="https://d3hjf51r9j54j7.cloudfront.net/wp-content/uploads/sites/9/2018/12/Storytelling-tech.jpg"></img>
              <i className="fas fa-headphones landing-icon" />
              <p>
    Vibrato Music allows you to store  your favorite music and add more songs from random websites. 
              </p>
            </div>
            
              <div className="flex-container1">
            <h3>Why use Vibrato Music
              <img alt = "musicapp" style={{width:'250px', height:'140px'}} src="https://c0.wallpaperflare.com/preview/659/470/559/italy-turin-rock-venue.jpg"></img>
              </h3>
              <i className="fas fa-wifi landing-icon"></i>
              
              <p>
               No WiFi, No Payments, No Data! Just Save and Go!
              </p>
              </div>
        </div> );
    }
}
 
export default SubHeader;


    