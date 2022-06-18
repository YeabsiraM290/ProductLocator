import ItemCard from './ItemCard'
import './assets/css/shopView.css'
import { useState, useEffect } from 'react';
import React, { Component }  from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ShopView = () => {

    let history = useNavigate();
    const {state} = useLocation();

    const id =state.detail[0]

    const [shop, setshop] = useState([]);
    const [cat, setCat] = useState('')
    const [name, setName] = useState('')

 
    useEffect(() => {
        send_data();
      }, []);

      const handleReviews = (e) =>{
        var item_info = [id ]
        history( '/shop_review',{state: {detail:item_info}} )
      }
    

    async function get_data() {

        let response = await fetch(`http://localhost:8000/api/shop/${id}/`, {
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
            console.log(data)
            setshop(data)
            setCat(data.more['category'])
            setName(data.more['shop_name'])
           
          
           }) .catch(function(err) {
            console.log(err)
        });
           
        }
        catch (error) {
         console.log(error);
       }
      }

var items = []
if (cat=="RESTURANT"){
    shop.menu.forEach(food => {
        items.push(<div className='col-md mt-5'><ItemCard item={food} cat={cat}/> </div>)
    });
}
else if (cat=="GAS STATION"){
    shop.gas.forEach(gas => {
        items.push(<div className='col-md mt-5'><ItemCard item={gas} cat={cat}/> </div>)
    });
}
else if (cat=="BOUTIQUE"){
    shop.cloth.forEach(cloth => {
        items.push(<div className='col-md mt-5'><ItemCard item={cloth} cat={cat}/> </div>)
    });
}
else if (cat=="HARDWARE STORE"){
    shop.hardware.forEach(hardware => {
        items.push(<div className='col-md mt-5'><ItemCard item={hardware} cat={cat}/> </div>)
    });
}


    return(
        

        <div className='shop_view_items'>
                    <div className="row vendor-menu text-center">

<div className="col mt-3"><a className='vendor-menu-items' href='/shop_view'>Products</a></div>
<div className="col mt-3"><a className='vendor-menu-items' onClick={handleReviews}>Reviews</a></div>

</div>
            <p className='text-center shop-name mt-5 mb-4'>{name}</p>
               <div className='row mb-5 mt-2 no-gutter'>

{items}

</div>


        </div>
    
    )
}

export default ShopView