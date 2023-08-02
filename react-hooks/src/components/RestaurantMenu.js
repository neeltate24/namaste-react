import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.213321847267988&lng=73.08505989611149&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    // console.log(json.data.cards[0].data.data.name);

    setResInfo(json.data);
    // console.log(resInfo.cards[0].data.data.name);
    // console.log(resInfo);
  };

  if (resInfo === null)
    return (
      <>
        <Shimmer />
      </>
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[0].card.info.name}</li> */}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <span
              style={{
                fontWeight: "bold",
                color: "blueviolet",
                fontStyle: "italic",
              }}
            >
              {item.card.info.name}
            </span>{" "}
            - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
