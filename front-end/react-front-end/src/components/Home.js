import React, { Component }  from 'react';
import HomeItem from "./HomeItem"
import { useState, useEffect } from 'react';
import './assets/css/home.css'
import Adview from './Adview';

const Home = () => {

    const [shop, setshop] = useState([]);
    const [item, setItem] = useState([]);
  
    useEffect(() => {
      send_data();
      random_data()
    }, []);

    async function get_random() {

        let response = await fetch('http://localhost:8000/api/random/', {
         method: 'GET',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
          })
    
        let data = await response.json();
        return data
    }
  
    async function get_data() {

        let response = await fetch('http://localhost:8000/api/advert/', {
         method: 'GET',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
          })
    
        let data = await response.json();
        return data
    }
  
  function random_data() {
  
    try{
    if(sessionStorage.getItem('type')){
      get_random().then(function(data){
       
        setItem([data])
   
  
   }) .catch(function(err) {
    console.log(err)
});
    }
       
    }
    catch (error) {
     console.log(error);
   }
  }

  function send_data() {
  
    try{
      get_data().then(function(data){
       
        if(sessionStorage.getItem('type')){
           
            setshop([data])
        }
      
      
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
  
   data['shop'].forEach(singleshop => {
    shopresults.push(<Adview item={singleshop}></Adview>)
   });
    
  });


  var itemresults = []

item.forEach(data => {

 data.forEach(singleitem => {
    itemresults.push(<HomeItem item={singleitem} />)
 });
  
});


    return(

        <div className="row home">

          {sessionStorage.getItem('type') &&   <div className="col-2 mx-4 mt-5">
                <p className='text-center'>Shops you might like</p>
                {shopresults}
            </div> }

            <div className="col mb-5">

                <div className="mt-5 text-center">
                    <h3>Products you may like</h3>
                </div>
                

                <div className="row">

               
               

                {itemresults}

                </div>

            </div> 

        </div>

    )
}

export default Home