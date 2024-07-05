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
            <div className = "m-5">
                <img className = "w-52" src = { avatar_url } />
                <h2 className = "font-thin text-lg"> Name : { name } </h2>
                <h3 className = "font-thin text-lg"> Num of Github Repositaries : { public_repos } </h3>
                <h4 className = "font-thin text-lg"> Mail : sujithkasthuri742@gmail.com </h4>
            </div>
        )
    }
}

export default User;