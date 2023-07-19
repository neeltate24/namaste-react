import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header Render");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          //src="https://tse2.mm.bing.net/th?id=OIP.SwFY80ZorUbL3yAskIeLzQHaHa&pid=Api&P=0&h=180"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
