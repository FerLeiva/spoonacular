import React from "react";

export default function Homepage() {
    return (
<nav className="navbar navbar-light" style={{backgroundColor: '#009243'}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://spoonacular.com/application/frontend/images/logo-simple-framed-green-gradient.svg" alt="spoonacular Logo" width="30" height="30" className="d-inline-block align-text-top"/>
      spoonacular
    </a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>
    </form>
  </div>
</nav>

    )};