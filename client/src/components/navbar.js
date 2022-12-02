import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar(props) {
 const [text, setText] = useState('')
 const change = (e)=>{
  setText(e)
 }
  props.global(text)
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            Home
          </NavLink>d
          <form class="d-flex" role="search">
            <input class="form-control me-2" onChange={(e)=>{change(e.target.value)}} type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <NavLink className="nav-link text-white" to="/create">
            Create Record
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}