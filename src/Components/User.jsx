import React from "react";
import { GITHUB_API_URL } from "../Utils/constants";

class User extends React.Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "Default",
                avatar_url : "https://DummyUrl...."
            }
        }
    }

    async componentDidMount ( ) {
        const data = await fetch ( GITHUB_API_URL );
        const json = await data.json();
        this.setState ( {
            userInfo : json,
        });
    }

    render () {
        const { name, public_repos, avatar_url } = this.state.userInfo;
        
        return (
            <div className = "user-card">
                <img className = "avatar" src = { avatar_url } />
                <h2> Name : { name } </h2>
                <h3> Num of Github Repositaries : { public_repos } </h3>
                <h4> Mail : abc@gmail.com </h4>
            </div>
        )
    }
}

export default User;