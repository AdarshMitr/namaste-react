const User=(props)=>{
    return <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h3>Location:{props.location} </h3>
        <h3>Contact:{props.contact}</h3>
    </div>
}

export default User;