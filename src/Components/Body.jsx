import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/customHooks/useOnlineStatus";


const Body = ( ) => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestauants,setFilteredRestauants] = useState([]);
    const [ filterList,setFilterList] = useState([]);
    const [ searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestauants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const OnlineStatus = useOnlineStatus();
    if ( OnlineStatus === false) return <h1> Internet Error !!! Look like you are offline </h1>;
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={ () => {
                        const filteredRestauant = listOfRestaurants.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        setFilteredRestauants(filteredRestauant);
                    } }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
                    setFilterList(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
               filteredRestauants.map(restaurant => <Link to = { "/restaurants/" + restaurant.info.id } key={restaurant.info.id} > <RestaurantCard resData={restaurant}/> </Link> )
               } 
            </div>            
        </div>
    )
}

export default Body;