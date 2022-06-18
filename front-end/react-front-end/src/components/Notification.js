import './assets/css/vendorMenu.css'
import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
    let history = useNavigate();
    const [notification, setNotification] = useState([]);

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
        
            setNotification(data['notification'])
        
           }) .catch(function(err) {
            console.log(err)
        });
           
        }
        catch (error) {
         console.log(error);
       }
      }

      async function handleAccept (e) {
  try{
    let response = await fetch('http://localhost:8000/api/accept/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
          body: JSON.stringify({
              notification_id: e.target.getAttribute('data-arg'),
             
          })
         })

         history( '/wish_list')

  }
  catch{
      console.log("accepted")
  }
        
      }

      async function handleDecline (e) {
          
     try{
        let response = await fetch('http://localhost:8000/api/decline/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
              body: JSON.stringify({
                  notification_id: e.target.getAttribute('data-arg'),
                 
              })
             })
             history( '/wish_list')

     }

     catch{
         console.log('declined')
     }

        
      }
      
var notificationResults = []

notification.forEach(data => {
    console.log(data)
    notificationResults.push(<div>
        <p>User {data.username} shared their wish list</p>
        <a className='accept' onClick={handleAccept} data-arg = {data.id}>Accept</a> <a onClick={handleDecline} data-arg = {data.id} className='decline'>Decline</a>
        <hr></hr>
    </div>)
    
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
   
                         
   
                           <table className="table table-condensed table-responsive">
   
                               <thead>
                                   <tr>
                                       <th >Notifications</th>
                                   </tr>
                               </thead>
   
                               <tbody>
   
                               {notificationResults}
   
                               </tbody>
   
                           </table>
      
                       </div>
   
                   </div>
   
               </div>
   
            
   
           </section>
           </div>
    )

}

export default Notification