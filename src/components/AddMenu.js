import React from "react";
import Footer from "./footer";
import './login.css';
import DashboardHeader from "./DashboardHeader";


export default class addMenu extends React.Component {

  state = {
   
  }
  render() {
    return (
<div>
        <DashboardHeader></DashboardHeader>

        <h1> Add Menu</h1>
      

       <main>
<form class="border" action="editAccount" >
  
<div>
  <p>What kind of food is served in your restaurant?</p>
  <div class="flexbox">
  <input type="checkbox" class="flex"></input>
      "Vegan"
    <input type="checkbox" class="flex"></input>
      "Veg"
      <input type="checkbox" class="flex"></input>
      "Non-Veg"
  </div>
  <p></p>
  <label for="Name of the Dish">Name of the Dish </label>
  <input type="name" id="name" required></input>
  <p></p>
  <label for="Price of the Dish">Price of the Dish </label>
  <input type="price" id="price" required></input>
  <p></p>
  <label for="Ingredients"> Ingredients  </label>
  <input type="ingredients" id="ingredients" required></input>
  </div> 
  <p></p>
</form>
       </main>
          
           
          <Footer></Footer>
            </div>

    );
  }
}