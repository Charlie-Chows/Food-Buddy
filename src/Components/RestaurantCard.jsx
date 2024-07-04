import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({resData}) => {
  const {name,cuisines,costForTwo,avgRating,sla,cloudinaryImageId} = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
            <img alt="res-logo" className = "rounded-lg" src={CDN_URL + cloudinaryImageId}/>
            <h3 className = "py-4 font-bold text-lg " >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> $ {costForTwo} Cost for Two</h4>
            <h4>{avgRating}stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export const withOpenLabel = ( RestaurantCard ) => {
    return ( props ) => {
        return (
            // input => Restaurant card  output => Restaurant card with open Label
            <div>
                <label className = "absolute bg-black text-white p-2 m-2 rounded-lg"> Open</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;