import React, { Component } from 'react';

class SubHeader extends Component {
    state = {  }
    render() { 
        return (<div>
             <h1>Vibrato Music</h1>
        <h2>
          All your favorite music in one spot!
        </h2>              
              <div className="flex-container">
<                   h3> What is Vibrato Music </h3>             
              
              <img alt = "musicapp" style={{width:'350px', height:'auto'}} src="https://images.pexels.com/photos/164951/pexels-photo-164951.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"></img>
              <p>
              Do you like to list your favorite music from different places ? Vibrato Music is an app to not only store  your favorite music but also allows you to add more songs from random websites. 
              </p>
            </div>
            
              <div className="flex-container">
            <h3>Why use Vibrato Music</h3>
              <img alt = "musicapp" style={{width:'350px', height:'auto'}} src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb%22"></img>
              <p>
               Apple Music, Youtube, Spotify, Dont Know which music to play? Imagine bringing all that on one place. Thats what Vibrato does for you.
              </p>
              </div>
              <div className="flex-container">
            <h3>Why use Vibrato Music</h3>
              <img alt = "musicapp" style={{width:'350px', height:'auto'}} src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb%22"></img>
              <p>
               Apple Music, Youtube, Spotify, Dont Know which music to play? Imagine bringing all that on one place. Thats what Vibrato does for you.
              </p>
              </div>
        </div> );
    }
}
 
export default SubHeader;


    