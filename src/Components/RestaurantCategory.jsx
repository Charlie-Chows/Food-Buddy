import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ( { data, showItems, setShowIndex } ) => {

    const handleClick = () => {
       setShowIndex();
    }
    
    return (
        <div>
            <div className = "w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
                {/* Accordian header */}
                <div className = "flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className = "font-bold text-lg"> { data.title } ({data.itemCards.length}) </span>
                    <span> 🔽 </span>
                </div>

                {/* Accordian Body */}
               { showItems && <ItemList items = {data.itemCards} /> }
            </div>  
        </div>
    )
}

export default RestaurantCategory;