/**
 * <div id = "parent" >
 *      <diV id = "child" >
 *          <h1> I am H1 tag </h1>
 *      </diV>
 * </div>
 **/  
const parent = React.createElement ( "div", { id : "parent" }, 
    React.createElement ( "div", { id : "child" }, 
    React.createElement ( "h1", {}, "I am an H1 tag" 
)));

/**
 * <div id = "parent" >
 *      <diV id = "child" >
 *          <h1> I am H1 tag </h1>
 *          <h2> I am H2 tag </h2>
 *      </diV>
 * </div>
 **/
const sibling = React.createElement( "div", { id : "parent" }, 
    React.createElement ( "div", { id : "child" }, [
        React.createElement ( "h1", {}, "I am H1 tag" ),
        React.createElement ( "h2", {}, "I am H2 tag" )
    ])
);

const heading = React.createElement( "h1", { id : 'heading' }, "Hello Charlie From React" );
const root = ReactDOM.createRoot ( document.getElementById( "root" ) );
root.render ( sibling );