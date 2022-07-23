import { NavLink } from "react-router-dom";
/* Add basic styling for NavLinks */
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  /* define the NavBar component */
  function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set  so it knows to only set activeStyle when route is deeply equal to link */
          
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    );
  }

  export default NavBar;