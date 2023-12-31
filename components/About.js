import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// Creating it a class based component

class About extends Component{

  constructor(props){
    super(props);
    //console.log('parent constructor')
  }

  componentDidMount(){
    //console.log('parent componentDidMount')
  }
  render(){
    //console.log('parent render')

    return (
    
      <div>
        
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        
      <User/>
        <UserClass name='Adarsh' location='Rewari' contact='@AdarshMitr'/>
        
        <div>loggedin User :
          <UserContext.Consumer>
{({loggedinUser})=><h2 className="text-blue-600 font-bold">{loggedinUser}</h2>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

  

  


export default About;
