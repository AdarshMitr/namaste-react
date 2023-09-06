import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo:{
name:'xyz',
location:'Default',
avatar_url:'https://dummyimage.com/300',
      },
    };
    //console.log("child constructor" + this.props.name);
  }

  async componentDidMount() {
    //console.log("child componentDidMount" + this.props.name);
    //API calls
    const data=await fetch('https://api.github.com/users/adarshmitr');
    const json=await data.json();
    this.setState(
  {
    userInfo:json,
  }
    )
    // console.log(json);
  }
  componentDidUpdate(){
    // console.log('component did update')
  }
  componentWillUnmount(){
    // console.log('component will unmount')
  }
  render() {
   
    //console.log("child render" + this.props.name);
    const {name,location,avatar_url}=this.state.userInfo;
    
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name} (from class)</h2>
        <h3>Location: {location} </h3>

        
              </div>
    );
  }
}

export default UserClass;
