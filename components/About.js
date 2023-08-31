import User from "./User";
import UserClass from "./UserClass";
const About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name='Adarsh' location='Gurugram' contact='@AdarshMitr'/>
      <UserClass name='Ashish' location='Rohtak' contact='@AapkaAshish'/>
    </div>
  );
};

export default About;
