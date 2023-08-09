import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
    
  return (
    <div>
        <h1>OOps!!! Something Went Wrong 😔</h1> 
        <h2>{err.status}</h2>
        <span>{err.statusText}</span>
        </div>

  )
}

export default Error;