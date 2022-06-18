import './assets/css/wishList.css'
import WishListItem from './WishListItem'
import React, { Component }  from 'react';
import { useState, useEffect } from 'react';

const WishList = () => {

    const [food, setfood] = useState([]);
    const [gas, setgas] = useState([]);
    const [hardware, sethardware] = useState([]);
    const [cloth, setcloth] = useState([]);

    useEffect(() => {
        send_data();
      }, []);
    
      async function get_data() {
    
        let response = await fetch(`http://localhost:8000/api/customer/${sessionStorage.getItem("id")}/`, {
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
        
            setcloth(data['more']['cloth_wishlist'])
            setfood(data['more']['food_wishlist'])
            sethardware(data['more']['product_wishlist'])
            setgas(data['more']['gas_wishlist'])
            
          
        
           }) .catch(function(err) {
            console.log(err)
        });
           
        }
        catch (error) {
         console.log(error);
       }
      }
      
      var foodresults = []

food.forEach(data => {
  if (data){
    foodresults.push(<WishListItem item={data} ></WishListItem>)
  }
  
  
});

var clothresults = []

cloth.forEach(data => {
  if (data){
    clothresults.push(<WishListItem item={data} ></WishListItem>)
  }
  
  
});

var gasresults = []

gas.forEach(data => {
  if (data){
    gasresults.push(<WishListItem item={data} ></WishListItem>)
  }
  
  
});

var hardwareresults = []

hardware.forEach(data => {
  if (data){
    hardwareresults.push(<WishListItem item={data} ></WishListItem>)
  }
  
  
});
    

    return(
      <div>
      <div className="row vendor-menu text-center">

      <div className="col mt-3"><a className='vendor-menu-items' href='/wish_list'>Wish list</a></div>
      <div className="col mt-3"><a className='vendor-menu-items' href='/shared_wishlist'>Shared wish lists</a></div>

  </div>
        <section className="pt-5 pb-5">

            <div className="container">

                <div className="row w-100">

                    <div className="col-lg-12 col-md-12 col-12">

                        <h3 className="display-6 mb-3 text-center">Wish List</h3>

                        <table className="table table-condensed table-responsive">

                            <thead>
                                <tr>
                                    <th >Product</th>
                                </tr>
                            </thead>

                            <tbody>

                            {foodresults}
                            {clothresults}
                            {gasresults}
                            {hardwareresults}

                            </tbody>

                        </table>
   
                    </div>

                </div>

            </div>

         

        </section>
        </div>
    )

}

export default WishList