import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
//import Footer from "./footer";
//import Address from "./Address";
//import AddEmployee from './AddEmployee';

class Dashboard extends Component{
    constructor(props) {
        super(props);
      this.state = { 
       }
      }
    
    
    render(){
        return(
            <div className="dashboard">
             <DashboardHeader currentUser={this.state.fullname}></DashboardHeader>
                 <section>

                     </section>   
                     <br>
                     </br>
                     </div>

      
        )};
}

  
export default Dashboard