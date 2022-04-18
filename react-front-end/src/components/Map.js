// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ItemHorizonatlCard from "./ItemHorizontalCard";
import './assets/css/map.css'
import React, { Component }  from 'react';

const Map = () => {

    return(

        <div className="row mt-3 map-container">
      
            <div className="col-7">

                <iframe className="map-frame" src="https://maps.google.com/maps?q=5kilo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
 
            </div>
                
            <div className="col-5 map-item-list">

                <p className="text-center shop-title mt-2">Shop Name</p>
     
                {ItemHorizonatlCard()}
                {ItemHorizonatlCard()}
                {ItemHorizonatlCard()}
                {ItemHorizonatlCard()}
                {ItemHorizonatlCard()}
                {ItemHorizonatlCard()}
                {ItemHorizonatlCard()}
    
            </div>

        </div>
    )

}

export default Map