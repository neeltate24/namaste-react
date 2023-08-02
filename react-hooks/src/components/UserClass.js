import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Image",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    // API call
    const data = await fetch("https://api.github.com/users/neeltate24");
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
    console.log("Child Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;

    console.log("Child Render");

    return (
      <>
        <div className="user-card1">
          <img src={avatar_url} />
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: @neeltate</h4>
        </div>
      </>
    );
  }
}

export default UserClass;

/**
 *
 * --- MOUNTING ---
 *
 * Constructor(dummy)
 * Render(dummy)
 *       <HTML Dummy>
 * ComponentDidMount
 *       <API call>
 *       <this.setState> --> State variable is updated.
 *
 * --- UPDATE ---
 *
 *     render(API data)
 *     <HTML (new API data)>
 *     ComponentDidUpdate
 *
 *
 *
 *
 *
 */
