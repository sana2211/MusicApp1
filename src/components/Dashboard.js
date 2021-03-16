import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
import styles from "./login.css";
import Footer from "./footer";
import AddMusic from "./AddMusic";
import Getmusic from './Getmusic';

class Dashboard extends Component{

    render(){
        //console.log(this.props.match.params.id)
        return(
            <div className="dashboard">

                <br></br>
             
                    <h2>
                    <i class="fas fa-music"></i>
                        Whats Next? Just add your favorite music and get started with the app!
                    </h2> 
                    <AddMusic></AddMusic>
                    <hr></hr>
                    <Getmusic></Getmusic>
</div>
      
        )};
}

  
export default Dashboard