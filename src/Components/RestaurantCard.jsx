import { CDN_URL } from "../Utils/constants";


const stylecard = {backgroundColor:"#f0f0f0"};
const RestaurantCard = ({resData}) => {
  const {name,cuisines,costForTwo,avgRating,sla,cloudinaryImageId} = resData?.info;
    return(
        <div className="res-card" style={stylecard}>
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> $ {costForTwo} Cost for Two</h4>
            <h4>{avgRating}stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;