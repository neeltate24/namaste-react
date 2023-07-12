import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super Powerful Variable

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //const arr = useState(resList);
  //const [listOfRestaurants, setListOfRestaurants] = arr;

  //const listOfRestaurants = arr[0];
  //const setListOfRestaurants = arr[1];

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

  return (
    <div className="body">
      <div
        className="filter"
        onClick={() => {
          //Filter Logic here
          // listOfRestaurants = listOfRestaurants.filter(
          //   (res) => res.info.avgRating > 4
          // );
          // console.log(listOfRestaurants);
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.2
          );
          setListOfRestaurants(filteredList);
        }}
      >
        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />  and many more*/}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
