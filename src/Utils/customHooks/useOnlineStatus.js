import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [ onlineStatus, setOnlineStatus ] = useState ( true );

    // check online status
    useEffect(() => {
        window.addEventListener( "Online", () => { 
            setOnlineStatus ( true );
        });

        window.addEventListener( "offline", () => {
            setOnlineStatus ( false );
        })
    }, [] );

    // return boolean value
    return onlineStatus;
}

export default useOnlineStatus;