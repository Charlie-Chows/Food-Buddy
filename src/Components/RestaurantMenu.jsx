import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [ showIndex, setShowIndex ] = useState(0);

    if(resInfo === null ) return <Shimmer /> ;

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    
    return  (
        <div className = "text-center  " >
            <h1 className = "font-bold text-2xl my-10"> { name } </h1>
            <h3 className="font-bold text-lg"> { cuisines.join(", ") } - { costForTwoMessage } </h3>
            {/* Categories Accordians */}
            {
                categories.map(( category , index) => 
                    // Controlled Component
                    <RestaurantCategory 
                        key = { category?.card?.card.title } 
                        data = { category?.card?.card } 
                        showItems={ index === showIndex ? true : false}
                        setShowIndex={ () => { setShowIndex(index) } }
                        />)
            }
        </div>
    )
}

export default RestaurantMenu;