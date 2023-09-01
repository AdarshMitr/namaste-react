import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
        count:0,
        count2:6
    }
    console.log('child constructor'+this.props.name)
  }

  componentDidMount(){
     console.log('child componentDidMount'+this.props.name)
  }
  render() {
    console.log('child render'+this.props.name)
    const {name, location, contact} = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name} (from class)</h2>
        <h3>Location: {location} </h3>
        <h3>Contact:{contact}</h3>
        <h3>Count:{this.state.count}</h3>
        <button onClick={()=>{
            //Never update state variable directly 
            this.setState({count:this.state.count+1})
        }}>increment+</button>
        <h3>Count2:{this.state.count2}</h3>
        <button onClick={()=>{
          this.setState({count2:this.state.count2+6})
        }}>Increment+6</button>
      </div>
    );
  }
}

export default UserClass;
