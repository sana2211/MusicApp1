import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
import styles from "./login.css";
import Footer from "./footer";
import AddMusic from "./AddMusic";
import Getmusic from './Getmusic';

class Dashboard extends Component{
    state = {
        fullname: ''
    }
    componentWillMount(){
    const a = window.location.href.split('/');
    const id = a[a.length - 1]
    fetch(`http://localhost:8000/api/users/${id}`)
    .then(result=>result.json())
    .then(result=>{
      this.setState({
          fullname: result.fullname
      })
    })
    .catch(err=>console.log(err))
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div className="dashboard">

                <br></br>
             <DashboardHeader currentUser={this.state.fullname}></DashboardHeader>
                    <h2>
                    <i class="fas fa-music"></i>
                        Whats Next? Just add your favorite music and get started with the app!
                    </h2> 
                    
                    <AddMusic></AddMusic>
                    <hr></hr>
                    <Getmusic></Getmusic>
                    <Footer></Footer>
</div>
      
        )};
}

  
export default Dashboard