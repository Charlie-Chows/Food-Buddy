import User from "./User";
import { Component } from "react";

class About extends Component {
    constructor ( props ) {
        super ( props );
    }
    
    render() {
        return (
            <div> 
                <h1> About Page </h1>
                <User name = {"Sujith Kumar Chowdary"} />
            </div>
    
        )
    }
}

export default About;