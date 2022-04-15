import {Form, FormControl,Button } from "react-bootstrap"
import './assets/css/navbar.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Navigation = () =>{

  const history = useNavigate();

  const search = (e) => {

      e.preventDefault();
      history('/search_result');
  };

    return(

<nav className="navbar navbar-expand-lg navbar-red navbar-dark">
    
    <div className="container-fluid all-show"> <a className="navbar-brand" href="/home">Product Locator <i className="fa fa-codepen"></i></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item"> <a className="nav-link active" aria-current="page" href="/map">Map</a> </li>
                <li className="nav-item">      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 search-bar"
          aria-label="Search"
        />
                <Button onClick={search} className="search-btn">Search</Button>
      </Form></li>
                <li className="nav-item"> <a className="nav-link" href="/profile">Profile</a> </li>
                <li className="nav-item"> <a className="nav-link" href="/vendor_profile">Vendor</a> </li>
                
                <li className="nav-item"> <a className="nav-link" href="/shop_view">Shop</a> </li>
                <li className="nav-item"> <a className="nav-link" href="/wish_list">Wish List</a> </li>
                <li className="nav-item"> <a className="nav-link" href="/login">Login</a> </li>
                <li className="nav-item"> <a className="nav-link" href="/vendor_signup_1">Register</a> </li>

            </ul>
            
        </div>
    </div>
</nav>
    )


}

export default Navigation