import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// Creating it a class based component

class About extends Component{

  constructor(props){
    super(props);
    console.log('parent constructor')
  }

  componentDidMount(){
    console.log('parent componentDidMount')
  }
  render(){
    console.log('parent render')
    return (
    
      <div>
        
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <User name='Adarsh' location='Gurugram' contact='@AdarshMitr'/>
        <UserClass name='Ashish' location='Rohtak' contact='@AapkaAshish'/>
      </div>
    );
  }
}

  

  


export default About;
