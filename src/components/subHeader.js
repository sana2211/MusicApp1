import React, { Component } from 'react';

class SubHeader extends Component {
    state = {  }
    render() { 
        return (<div>
             <h1>Vibrato Music</h1>
        <h2>
          All your favorite music in one spot!
        </h2>              
              <div class="descBox">
              <h3>What is Vibrato Music</h3>
              <p>
              Do you like to list your favorite music from different places ? Vibrato Music is an app to not only store  your favorite music but also allows you to add more songs from random websites. 
              </p>
              </div>
              <div class="descBox">
              <h3>Why use Vibrato Music</h3>
              <p>
               Apple Music, Youtube, Spotify, Dont Know which music to play? Imagine bringing all that on one place. Thats what Vibrato does for you.
              </p>
              </div>
        </div> );
    }
}
 
export default SubHeader;