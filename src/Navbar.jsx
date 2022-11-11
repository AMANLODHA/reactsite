import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
     
          <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
  {<NavLink className="navbar-brand" to="/"> Aman Lodha </NavLink>}
  <ul className="nav nav-pills ml-auto mb-2 mb-2 mb-lg-0">
    <li className="nav-item">
      {<NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>}
    </li>
    
    <li className="nav-item">
      {<NavLink activeClassName="menu_active" exact className="nav-link" to="/service">Service</NavLink>}
    </li>
    <li className="nav-item">
      {<NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>}
    </li>
    <li className="nav-item">
      {<NavLink activeClassName="menu_active" exact className="nav-link" to="/contact"> Contact </NavLink>}
    </li>
    
    
      </ul>
    
</nav>

</div>
            </div>
        </div> 

        </>
    );
};

export default Navbar;