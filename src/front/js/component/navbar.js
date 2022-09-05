import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
	  <Link to="/" className="navbar-brand">
      <img src="../../img/react-img.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      React Boilerplate
    </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="" className="nav-link">
                Images 
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
			  	to=""
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Action User
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Register" className="dropdown-item">
                    Regiter User
                  </Link>
                </li>
                <li>
                  <Link to="/Login"  className="dropdown-item">
                   Login User 
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
