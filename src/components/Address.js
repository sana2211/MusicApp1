import React from "react";
import './login.css';
import DashboardHeader from "./DashboardHeader";



export default class addaddress extends React.Component {

  state = {
   
  }
  render() {
    return (

      <div>
        <DashboardHeader></DashboardHeader>
        <h1> Address</h1>

        <form>

        <fieldset>
  <legend>Restaurant:</legend>
  <label htmlFor="restaurantname">Restaurant name: </label>
  <input type="text" id="restaurantname" name="restaurantname"/><br></br>
  <label htmlFor="address">Street Address: </label>
  <input type="text" id="address" name="address"/><br></br>
  <label htmlFor="phone">Phone No: </label>
  <input type="integer" id="phone" name="phone"/><br></br>
  <label htmlFor="city">City: </label>
  <input type="text" id="city" name="city"/><br></br>
  <label htmlFor="country">Country: </label>
  <input type="text" id="country" name="country"/><br></br>
  
  <label htmlFor="timings">Timings: </label>
  <input type="number" id="timings" name="timings"/><br></br>
  <button>Add</button>

  </fieldset>
  </form>
  </div>
    );
  }
}