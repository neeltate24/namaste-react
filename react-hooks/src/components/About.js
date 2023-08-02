import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Parent Constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "Parent Component Did Mount");
    // Api call
  }

  render() {
    // console.log(this.props.name + "Parent Render");
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"Neel Tate (function)"} /> */}
        {/* <UserClass name={"First"} location={"Chembur Class"} /> */}
        {/* <UserClass name={"Second"} location={"US"} /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;

// React Life Cycle
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

/*
- Parent Constructor
- Parent Render
  
  - First Constructor
  - First Render

  - Second Constructor
  - Second Render

  <DOM UPDATED - IN SINGLE BATCH>
  - First ComponentDidMount
  - Second ComponentDidMount

- Parent ComponentDidMount
 */
