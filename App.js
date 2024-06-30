import React from "react";
import ReactDOM from "react-dom/client"

const Header = ( ) => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/jpeg;base64,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"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About Us </li>
                    <li> Contact </li>
                    <li> Cart </li>
                </ul>
            </div>

        </div>
    )
}

const stylecard = {backgroundColor:"#f0f0f0"};

const RestaurantCard = ({name}) => {
    return(
        <div className="res-card" style={stylecard}>
            <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng"/>
            <h3>{name}</h3>
            <h4>Biryani, cakes, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>7 minutes</h4>
        </div>
    )
}

const Body = ( ) => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard name="MeganaFoods"/>
                <RestaurantCard name="Megan"/>
            </div>            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className = "app" >
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot ( document.getElementById( "root" ) );
root.render ( <AppLayout /> );