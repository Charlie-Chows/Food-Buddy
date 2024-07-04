import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
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

    const RestaurantOpenLabel = withOpenLabel(RestaurantCard);

    console.log("list of restaurants : ", listOfRestaurants);
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
            <div className = "flex" >
                <div className = "m-4 p-4" >
                    <input type="text" className = "border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button className = "px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={ () => {
                        const filteredRestauant = listOfRestaurants.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        setFilteredRestauants(filteredRestauant);
                    } }>Search</button>
                </div>
                <div className = "flex items-center m-4 p-4" >
                <button className = "px-4 py-2 bg-gray-100 rounded-lg " onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
                    setFilterList(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className = "flex flex-wrap" >
               {
               filteredRestauants.map(restaurant => 
                    <Link to = { "/restaurants/" + restaurant.info.id } key={restaurant.info.id} >
                        {/* If restaurant is open it add label on it */
                        restaurant.info.isOpen ? <RestaurantOpenLabel resData={restaurant}/> :  <RestaurantCard resData={restaurant}/> 
                        } 
                        
                    </Link> )
               } 
            </div>            
        </div>
    )
}

export default Body;