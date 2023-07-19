import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super Powerful Variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)
  console.log("Body Rendered");

  //const arr = useState(resList);
  //const [listOfRestaurants, setListOfRestaurants] = arr;

  //const listOfRestaurants = arr[0];
  //const setListOfRestaurants = arr[1];

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.213321847267988&lng=73.08505989611149&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards);
    setFilteredRestaurant(json?.data?.cards);
  };

  //Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //   {
  //     info: {
  //       id: "28569",
  //       name: "Dominos",
  //       cloudinaryImageId: "fwi6bb01qsdxis8jpmzk",
  //       costForTwo: "₹450 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //         "Tandoor",
  //         "Biryani",
  //         "Indian",
  //       ],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 30,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "28570",
  //       name: "KFC",
  //       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
  //       costForTwo: "₹450 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //         "Tandoor",
  //         "Biryani",
  //         "Indian",
  //       ],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 30,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "28571",
  //       name: "Royal Kitchen",
  //       cloudinaryImageId: "thh2hzt6eudbljtpakvg",
  //       costForTwo: "₹450 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //         "Tandoor",
  //         "Biryani",
  //         "Indian",
  //       ],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 30,
  //       },
  //     },
  //   },
  // ]);

  // Normal JS Variable

  // let listOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "28569",
  //       name: "Dominos",
  //       cloudinaryImageId: "fwi6bb01qsdxis8jpmzk",
  //       costForTwo: "₹450 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //         "Tandoor",
  //         "Biryani",
  //         "Indian",
  //       ],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 30,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "28570",
  //       name: "KFC",
  //       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
  //       costForTwo: "₹450 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //         "Tandoor",
  //         "Biryani",
  //         "Indian",
  //       ],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 30,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "28571",
  //       name: "Royal Kitchen",
  //       cloudinaryImageId: "thh2hzt6eudbljtpakvg",
  //       costForTwo: "₹450 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //         "Tandoor",
  //         "Biryani",
  //         "Indian",
  //       ],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 30,
  //       },
  //     },
  //   },
  // ];

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div
        className="filter"

        //Filter Logic here
        // listOfRestaurants = listOfRestaurants.filter(
        //   (res) => res.info.avgRating > 4
        // );
        // console.log(listOfRestaurants);
      >
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI.
              // SearchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />  and many more*/}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
