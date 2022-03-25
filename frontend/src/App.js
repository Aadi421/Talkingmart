import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Form from "./components/Form"



class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        {localStorage.getItem('email')?<Form/>:""}
        
        
       
      </>
    );
  }
}

export default App;
