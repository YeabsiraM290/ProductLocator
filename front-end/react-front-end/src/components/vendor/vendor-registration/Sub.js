import React, { Component }  from 'react';
import { useState, useEffect } from 'react';

const Sub = () => {

    useEffect(() => {
        send_data();
      }, []);

      async function send_data() {
    

      let response = await fetch('http://localhost:8000/api/transaction/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
          body:JSON.stringify({
           date:new Date().toISOString().split('T')[0],
           amount:50,
          
          })
         })
     
 
      var data  = await response;
       if (data.status == 500){
        let respons = await fetch('http://localhost:8000/api/transaction/', {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
            body:JSON.stringify({
             date:new Date().toISOString().split('T')[0],
             amount:50,
            })
           })
       }
     
    

    }


  return(

    <div className="container mt-5 vendor-signup-plan-con text-center">

      <p className="text-center vendor-signup-title"> Select Plan </p>

        <div className="row ">
     
          <div className="col-lg-6   col-md-12 mb-4">
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">Basic</h5>
                    <br/><br/>
                    <span className="h2">Free</span>
                    <br/><br/>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Upto 20 free product listing</li>
                  <li className="list-group-item"> can be located on map</li>
                
                </ul>
                <div className="card-body text-center">
                
                </div>
              </div>
            </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title">Premium</h5>
                  <br/><br/>
                  <span className="h2">50 birr</span>/month
                  <br/><br/>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Unlimited listing</li>
                <li className="list-group-item">Shop advertisment</li>
                <li className="list-group-item">Located on map</li>
              </ul>
              <div className="card-body text-center">
              <form method="post" action="https://test.yenepay.com/">
    <input type="hidden" name="Process" value="Express"/>

    <input type="hidden" name="MerchantOrderId" value=""/>

    <input type="hidden" name="MerchantId" value="SB1609"/>

    <input type="hidden" name="IPNUrl" value=""/>

    <input type="hidden" name="SuccessUrl" value="http://localhost:3000/subscriptions"/>

    <input type="hidden" name="CancelUrl" value="http://localhost:3000/subscription"/>
    <input type="hidden" name="ItemId" value="af2a8aea-bfac-4d46-b022-32401b41dbe1"/>
  
    <input type="hidden" name="ItemName" value="Test Item 1"/>

    <input type="hidden" name="UnitPrice" value="50.00"/>

    <input type="hidden" name="Quantity" value="1"/>
  
    <input type="submit" className="btn login-btn btn-primary btn-lg" value="Select"/>
</form> 
               
              </div>
            </div>
          </div>
        
        </div>

    </div>


  )
};

export default Sub;