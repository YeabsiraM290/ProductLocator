import './assets/css/searchResult.css'
import Results from './Results'
import { useState, useEffect } from 'react';
import React, { Component }  from 'react';
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const {state} = useLocation();
  const [shop, setshop] = useState([]);
  const [food, setfood] = useState([]);
  const [gas, setgas] = useState([]);
  const [hardware, sethardware] = useState([]);
  const [cloth, setcloth] = useState([]);

  useEffect(() => {
    send_data();
  }, []);

  async function get_data() {

    let response = await fetch(`http://localhost:8000/api/search/?search=${state.detail}`, {
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

      setshop(data['shop'])
      setfood(data['food'])
      sethardware(data['hardware'])
      setgas(data['gas'])
      setcloth(data['cloth'] )
    
     }) .catch(function(err) {
      console.log(err)
  });
     
  }
  catch (error) {
   console.log(error);
 }
}

var shopresults = []

shop.forEach(data => {
  console.log(data)
  shopresults.push(<Results itemName={data.more['shop_name']} item={data} cat={'shop'}></Results>)
  
});

var foodresults = []

food.forEach(data => {
  if (data){
    foodresults.push(<Results itemName={data['name']} item={data} cat={'food'}></Results>)
  }
  
  
});

var clothresults = []

cloth.forEach(data => {
  if (data){
    clothresults.push(<Results itemName={data['name'] } item={data} cat={'cloth'}></Results>)
  }
  
  
});

var gasresults = []

gas.forEach(data => {
  if (data){
    gasresults.push(<Results itemName={data['name']} item={data} cat={'gas'}></Results>)
  }
  
  
});

var hardwareresults = []

hardware.forEach(data => {
  if (data){
    hardwareresults.push(<Results itemName={data['name'] } item={data} cat={'hardware'}></Results>)
  }
  
  
});
    return(
      <div className="row mt-3 item-control">


      <div className="col-3">




          </div>
      <div className="col-9 mb-5">
      <div className="cart_section">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                    <div className="cart_title">Results....</div>

                    <p className= 'mt-5'>Shops {shopresults.length} found</p>

                    {shopresults}

     <p className='mt-5'>Foods {foodresults.length} found</p>

{foodresults}

<p className='mt-5'>Cloth {clothresults.length} found</p>

{clothresults}

<p className='mt-5'>Gas {gasresults.length} found</p>

{gasresults}

<p className='mt-5'>Hardware {hardwareresults.length} found</p>

{hardwareresults}
           
                      
            
                    
                </div>
            </div>
        </div>
    </div>
</div>

          </div>

  </div>
    )

}

export default SearchResult