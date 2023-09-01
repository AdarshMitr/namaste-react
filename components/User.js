import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
useEffect(()=>{
  //API calls
},[]);

    
  return (
    
        
    <div className="user-card">
      <h2>Name: {name}(from function)</h2>
      <h3>Location:{location} </h3>
      <h3>Contact:{contact}</h3>
      
    </div>
  );
};

export default User;
