import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {
  return (
      <header>
        <nav>
          <ul>
            <ul className="menuul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
            </ul>
          </ul>
        </nav>
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
                 </header>
    );
}
  export default Header;
  