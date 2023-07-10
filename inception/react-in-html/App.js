import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Card Container
 *   - Restaurant Card
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          //src="https://tse2.mm.bing.net/th?id=OIP.SwFY80ZorUbL3yAskIeLzQHaHa&pid=Api&P=0&h=180"
          src="https://tse3.mm.bing.net/th?id=OIP.gpDXeEx9wM-Onvd34VfUGAHaEX&pid=Api&P=0&h=180"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //destructuring of objects, instead of using props
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="http://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/04/Biryani-featured-Image.jpg"
      />
      <h3>{resName}</h3>
      {/* When destructured we can use both props.resName or just resName */}
      <h5>{cuisine}</h5>
      <h5>4.6 stars</h5>
      <h5>38 mins</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Bucket, Wraps" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
