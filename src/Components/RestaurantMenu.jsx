import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/constants";


const RestaurantMenu = () => {

    const [ resInfo, setResInfo] = useState ( null );
    const { resId } = useParams();

    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch ( MENU_API_URL + resId );
        const json = await data.json();
        setResInfo(json.data);
        
    }

    if(resInfo === null ) return <Shimmer /> ;

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    

    return  (
        <div className = "menu" >
            <h1> { name } </h1>
            <h3> { cuisines.join(", ") } - { costForTwoMessage } </h3>
            <ul>
                { itemCards.map( item => <li key={ item.card?.info?.id }> { item.card?.info?.name } -  $ { item.card?.info?.price / 100 } /- </li> ) } 
            </ul>
        </div>
    )
}

export default RestaurantMenu;