import "../../assets/css/vendorSignup.css";
import { useNavigate } from 'react-router-dom';
import React, { Component }  from 'react';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { ValidateLength } from '../../../Helpers/validation'

const StepTwo = props => {

  getLocation()
  function getLocation(){
    if (navigator.geolocation){
      
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
      setError(true)
      
      setError_message("Geolocation is not supported by this browser")
       
    }
}

function showPosition(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    setlocation(lat, long)
}

var positions = []

function setlocation(lat, long){
  positions[0] = Number((lat).toFixed(1))
  positions[1] = Number((long).toFixed(1))
}


function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
          setError(true)
          setError_message("User denied the request for Geolocation.")
         
        break;
        case error.POSITION_UNAVAILABLE:
          setError(true)
          setError_message("Location information is unavailable.")
          
        break;
        case error.TIMEOUT:
          setError(true)
          setError_message("The request to get user location timed out.")
          
        break;
        case error.UNKNOWN_ERROR:
          setError(true)
          setError_message("An unknown error occurred.")
            
        break;
    }
}



  const [shopname, setShopname] = useState('');
  const [shopImage, setShopImage] = useState('');
  const [shopLogo, setShopLogo] = useState('');
  const [category, setCategory] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setError_message] = useState('')

  const handleshopname = (e) => {
    setShopname(e.target.value);
    setSubmitted(false);
    };

const handleshopImage = (e) => {

  var reader = new FileReader();
  reader.onload = function(){
    setShopImage(reader.result);
    setSubmitted(false);
  
  }
  reader.readAsDataURL(e.target.files[0]);
    
    };

const handleshopLogo = (e) => {

  var reader = new FileReader();
  reader.onload = function(){
    setShopImage(reader.result);
    setShopLogo(reader.result);
    setSubmitted(false);
  
  }
  reader.readAsDataURL(e.target.files[0]);
  
    };


const handlecategory = (e) => {
  setCategory(e.target.value);
    setSubmitted(false);
    };

    var x= "Resturant"
    const history = useNavigate();
    const {state} = useLocation();

    const send_data = async () => {
     

      try{
       const response = await fetch('http://localhost:8000/api/vendor/', {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               email: state.detail[1],
               username: state.detail[0],
               password:state.detail[2],
               phone_no:state.detail[3],
              
                shop_name: shopname,
                category: x,
                location_latitude: positions[0],
                location_longitude: positions[1]
               
           })
         })

         if (response.status == 201){
             setSubmitted(true)
             setError(false)
             setTimeout(toLogin, 500)
             function toLogin(){
              history('/login')
             }
         }
         else{
             setError(true)
             console.log(response)
             console.log(
              JSON.stringify({
                email: state.detail[1],
                username: state.detail[0],
                password:state.detail[2],
                phone_no:state.detail[3],
               
                 shop_name: shopname,
                 category: x,
                 location_latitude: positions[0],
                 location_longitude: positions[1]
                
            })
             )
             setError_message(response.statusText)
         }
         
      }
      catch (error) {
       console.log("error");
     }
   }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (shopname === '' || shopImage === null || shopLogo === null || category === '') {
          setError(true);
          setError_message('Fill all empty fields');
      }
   
      else if(!ValidateLength(4, 8, shopname)[0]){
          setError(true)
          setError_message("Username ".concat(ValidateLength(4, 8, shopname)[1]))
      }

      else {
        send_data()
    
      }
      };
    

      const successMessage = () => {
        return (
        <div
        className="success"
        style={{
        display: submitted ? '' : 'none',
        }}>
        <h4 className='success-message'>Vendor {state.username} successfully registered!!</h4>
        </div>
        );
        };

    const showerrorMessage = () => {
        return (
        <div
        className="error"
        style={{
        display: error ? '' : 'none',
        }}>
        <h4 className='error-message'>* {errorMessage}</h4>
        </div>
        );
        };


  return(

    <div className="container text-center vendor-signup-container">

      <p className="text-center vendor-signup-title"> Shop information </p>
      {showerrorMessage()}
            {successMessage()}

      <div className="form-outline mb-4">
        <p className="success-message"> * Regester at your shop location</p>
      </div>

      <form>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="shop_img">Shop name</label>
            </div>

            <div className="col-9">
              <input type="text" name="name" onChange={handleshopname} value={shopname} id="name" className="form-control" />
            </div>

          </div>

        </div>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="shop_img">Shop image</label>
            </div>

            <div className="col-9">
              <input type="file" name="shop_img" accept="image/*" onChange={handleshopImage}  id="form2Example1" className="form-control" />
            </div>

          </div>
            
        </div>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="shop_img">Shop logo</label>
            </div>

            <div className="col-9">
              <input type="file" name="shop_img" accept="image/*" onChange={handleshopLogo}  id="form2Example1"  className="form-control" />
            </div>

          </div>

        </div>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="cars">Catgory</label>
            </div>

            <div className="col-9">

              <select class="form-select" onChange={handlecategory} aria-label="Default select example">

                <option value ="Resturant">Resturant</option>
                <option value="Gasstation">Gas station</option>
                <option value="Hardwarestore">Hardware store</option>
                <option value="Boutique">Boutique</option>
                
              </select>

            </div>

          </div>
            
        </div>

        <button type="button" onClick={handleSubmit} className="login-btn btn btn-primary btn-block mb-4">Signup</button>

      </form>
  
    </div>

  );
};

export default StepTwo;