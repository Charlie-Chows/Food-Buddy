import UserContext from "../Utils/UserContext";
import User from "./User";
import { Component } from "react";

class About extends Component {
    constructor ( props ) {
        super ( props );
    }
    
    render() {
        return (
            <div> 
                <h1 className = " text-4xl font-bold m-8"> About Page </h1>
                <span className = "ml-5"> User Id : </span>
                <UserContext.Consumer>
                    { ( { loggedInUser } ) => <span className="font-semibold"> { loggedInUser } </span> }
                </UserContext.Consumer>
                <User name = {"Sujith Kumar Chowdary"} />
                
            </div>
    
        )
    }
}

export default About;