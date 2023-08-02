import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   Api Calls
  // }, []);

  return (
    <>
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            setCount(count + 1);
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            setCount(count - 1);
          }}
        >
          Count Decrease
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Chembur</h3>
        <h4>Contact: @neeltate</h4>
      </div>
    </>
  );
};

export default User;
