import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Utils/UserContext";


const Grocery = lazy(() => import( "./Components/Grocery" ));
const About = lazy ( () => import( "./Components/About" ));

const AppLayout = () => {
    const [ userName , setUserName ] = useState();

    useEffect( () => {
        // Authentication logic send userName & password
        const data = {
            name : "Sujith Chowdary"
        }
        setUserName(data.name);
    },[])
    return (
        <UserContext.Provider value = {{ loggedInUser : userName , setUserName}}>
            <div className = "app" >
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:<Suspense fallback = { <Shimmer /> } > <About /> </Suspense>
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/grocery",
                element: <Suspense fallback = { <h1> Loading .... </h1>  } > <Grocery /> </Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    
])


const root = ReactDOM.createRoot ( document.getElementById( "root" ) );
root.render ( <RouterProvider router={appRouter}/> );