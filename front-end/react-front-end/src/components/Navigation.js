import {Form, FormControl,Button } from "react-bootstrap"
import './assets/css/navbar.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { setSelectionRange } from "@testing-library/user-event/dist/utils";


const Navigation = () =>{
    const history = useNavigate();

const [keyterm, setkeyterm] = useState('');
const [customer, setcustomer] = useState(false);
const [vendor, setvendor] = useState(false);
const [none, setnone] = useState(false);

useEffect (() => {
    if(sessionStorage.getItem('type') == 'VENDOR'){
        setvendor(true)
    }
    
    else if (sessionStorage.getItem('type') == 'CUSTOMER'){
        setcustomer(true)
    }
    
    else{
        setnone(true)
    }
    
 
    
})

const handelKey = (e) =>{
    setkeyterm(e.target.value)
}

const handelLogout = (e) =>{
    e.preventDefault();
    sessionStorage.clear()
    history( '/login' )
}


const handelSearch = (e) =>{
    e.preventDefault();
    history( '/search_result',{state: {detail:keyterm}} )
}

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
          required='true'
          onChange={handelKey}
        />
                <Button onClick={handelSearch} className="search-btn">Search</Button>
      </Form></li>
                {customer && <li className="nav-item"> <a className="nav-link" href="/profile">Profile</a> </li> }
                {vendor && <li className="nav-item"> <a className="nav-link" href="/vendor_profile">Vendor</a> </li>}
                
                {vendor &&  <li className="nav-item"> <a className="nav-link" onClick={handelLogout}>Logout</a> </li>}
                {customer &&  <li className="nav-item"> <a className="nav-link" href="/wish_list">Wish List</a> </li>}
                {customer &&  <li className="nav-item"> <a className="nav-link" onClick={handelLogout}>Logout</a> </li>}
               
               {none && <li className="nav-item"> <a className="nav-link" href="/login">Login</a> </li> }
               {none && <li className="nav-item"> <a className="nav-link" href="/vendor_signup_1">Vendor Register</a> </li> }

            </ul>
            
        </div>
    </div>
</nav>
    )


}

export default Navigation