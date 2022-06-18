import React, { Component }  from 'react';
import "../assets/css/itemControl.css";
import ItemHorizonatlCard from "../ItemHorizontalCard";
import { useState, useEffect } from 'react';

const VendorItemControl = () => {

  const [item, setitem] = useState([]);


  useEffect(() => {
      send_data();
    }, []);

  var url =''
var cat = sessionStorage.getItem('cat')


  async function get_data() {

      let response = await fetch(`http://localhost:8000/api/vendor/${sessionStorage.getItem('id')}/`, {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
        })
  
      let data = await response.json();
      return data
  }

  function send_data() {

    try{
      get_data().then(function(data){
        
        if (cat =="RESTURANT"){
          setitem(data['menu'])
      }
      else if (cat=="GAS STATION"){
        setitem(data['gas'])
      }
      else if (cat=="BOUTIQUE"){
        setitem(data['cloth'])
      }
      else if (cat=="HARDWARE STORE"){
        setitem(data['hardware'])
      }
       
      
       }) .catch(function(err) {
        console.log(err)
    });
       
    }
    catch (error) {
     console.log(error);
   }
  }

  var results = []

item.forEach(data => {
  if (data){
    results.push(<ItemHorizonatlCard item={data}></ItemHorizonatlCard>)
  }
  
  
});


    return(

        <div className="row mt-3 mb-5">

          <a className="add-item-btn" href="/add_item">Add new item  {' '}</a>
          
          <div className="col item-control-con">

            <p className="text-center item-control-titles mt-2">Your Products</p>

            <div className="item-control-itemlist">
              {results}
          
            </div>
                
          </div>

     

  </div>

    )
} 

export default VendorItemControl