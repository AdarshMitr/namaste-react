import { useState } from "react";

const User = ({ name, location, contact }) => {
const [count,setCount]=useState(0);
const increment=()=> setCount(count+1);
    
  return (
    
        
    <div className="user-card">
      <h2>Name: {name}(from function)</h2>
      <h3>Location:{location} </h3>
      <h3>Contact:{contact}</h3>
      <h3>Count:{count}</h3>
      <button onClick={increment}>Increase+</button>
    </div>
  );
};

export default User;
