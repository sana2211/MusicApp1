import React from "react";
import './App.css';
import signIn from "./components/signIn";
import signUp from "./components/signUp";
import { Link } from "react-router-dom";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Footer from "./components/footer";
import Dashboard from "./components/Dashboard";
//import DashboardHeader from './components/DashboardHeader';
//import AddMusic from './components/AddMusic';



function App() {
  return (
    <div>
      <Header>
      </Header>
      <main>
      <SubHeader></SubHeader>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
