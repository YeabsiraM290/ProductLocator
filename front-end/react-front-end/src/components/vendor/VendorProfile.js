import React, { Component }  from 'react';
import "../assets/css/vendorProfile.css";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const VendorProfile = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conform_password, setConform_password] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [profile_pic, setProfile_pic] = useState('');
    const [shopname, setShopname] = useState('');
    const [shopImage, setShopImage] = useState('');
    const [shopLogo, setShopLogo] = useState('');
    const [category, setCategory] = useState('');
    const [edit, setEdit] = useState(false);

    

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    
    const [errorMessage, setError_message] = useState('')
    const history = useNavigate();
    useEffect(() => {
        send_data();
      }, []);
    
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

    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
      };
    
      const handleProfilePic = (e) => {
        setProfile_pic(e.target.value);
        setSubmitted(false);
        };
  
  const handleUsername = (e) => {
      setUsername(e.target.value);
      setSubmitted(false);
      };
  
  const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
      };
  
  const handleConform_password = (e) => {
      setConform_password(e.target.value);
      setSubmitted(false);
      };
  
  const handlePhone_number = (e) => {
      setPhone_number(e.target.value);
      setSubmitted(false);
      };
      const handleEdit = (e) => {
        setEdit(!edit)
      }

      async function handelSave (e) {
        let response = await fetch(`http://localhost:8000/api/vendor/${sessionStorage.getItem("id")}/`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
            body: JSON.stringify({
              username: username,
              password: password,
              more: {
                  shop_name:shopname
              }
          })
           },)
    
       setEdit(false)
      }

      async function handelUpdateLocation (e) {
        let response = await fetch(`http://localhost:8000/api/vendor/${sessionStorage.getItem("id")}/`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
            body: JSON.stringify({
              more: {
                location_latitude:positions[0],
                location_longitude:positions[1]
              }
          })
           },)
   
    
       setEdit(false)
      }


      
    
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
      
          const handleShopname = (e) => {
            setShopname(e.target.value);
              setSubmitted(false);
              };
      
      const handlecategory = (e) => {
        setCategory(e.target.value);
          setSubmitted(false);
          };

          async function handelDel (e) {
            let response = await fetch(`http://localhost:8000/api/vendor/${sessionStorage.getItem("id")}/`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
               })
               sessionStorage.clear()
       
             let data = await response;
            
             if (data.status==204){
               sessionStorage.clear()
               
               history('/login')
             }
          }
        
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
  
            var profile= data
            
            setEmail(profile['email'])
            setUsername(profile['username'])
            setPassword(profile['password'])
            setPhone_number(profile['phone_no'])
            setProfile_pic(profile['profile_pic'])
            setShopImage(profile['more']['shop_image'])
            setShopname(profile['more']['shop_name'])
            setShopLogo(profile['more']['shop_logo'])
  
            console.log(profile)
  
  
          
           }) .catch(function(err) {
            console.log(err)
        });
           
        }
        catch (error) {
         console.log(error);
       }
     }
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
      
  

    return (

        <div className="row">
             {showerrorMessage()}

            <div className="col-6">

                <div className="container text-center vendor-profile-con">

                    <form>

                        <div className="text-center">

                            <div className="vprofile-img">

                                <img src={profile_pic}  alt="" />
                                
                                <br />
                                <br />

                                <div className="file btn btn-lg btn-primary">Change Photo<input type="file" name="file" /></div>

                            </div>
                            
                        </div>
                       
                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label className="labels" for="cars">Username</label>
                                </div>

                                <div className="col-9">
                                   {edit &&  <input type="text"  id="form2Example1" placeholder="username" onChange={handleUsername} value={username}className="form-control" />}
                                   {!edit && <input type="text" disabled id="form2Example1" placeholder="username" onChange={handleUsername} value={username}className="form-control" />}
                                </div>

                            </div>

    
                        </div>

                        <div className="form-outline mb-4">

                            <div className="row">
 
                                <div className="col-3">
                                    <label className="labels" for="cars">Email</label>
                                </div>

                                <div className="col-9">
                                    <input type="email" disabled id="form2Example1" placeholder="username" onChange={handleEmail} value={email}  className="form-control" />
                                </div>

                            </div>

                        </div>

                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label className="labels" for="cars">Phone number</label>
                                </div>

                                <div className="col-9">
                                    <input type="number" disabled id="form2Example1" placeholder="username" onChange={handlePhone_number} value={phone_number} className="form-control" />
                                </div>

                            </div>

                        </div>


                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label className="labels" for="cars">Password</label>
                                </div>

                                <div className="col-9">
                                    {edit && <input type="password" id="form2Example1" placeholder="" onChange={handlePassword} value={password} className="form-control" />}
                                    {!edit && <input type="password" disabled id="form2Example1" placeholder="" onChange={handlePassword} value={password} className="form-control" />}
                                </div>

                            </div>

                        </div>  

                        {edit &&   <div className="col-sm-12 text-center mt-2">
                      <button type="button" className="save-btn  btn-block mb-4" onClick={handelSave}>Save</button>
                      </div>}
{!edit && 
                      <div className="col-sm-12 text-center mt-2">
                      <button type="button" className="edit-btn btn btn-secondary btn-block mb-4" onClick={handleEdit}>Edit</button>
                      </div>}

                        <br/>
                    
                        <a type="button" className="del-account" onClick={handelDel}>Terminate account</a>

                    </form>

                </div>

                
            </div>

            <div className="col-6">

                <div className="container text-center vendor-profile-shop-con">

                    <form>

                        <div className="row">

                            <div className="col-6">

                                <div className="row">

                                    <div className="col-4"><label className="shop-info-labels">Shop image</label></div>

                                    <div className="col-8">

                                        <div className="text-center">

                                            <div className="profile-img">

                                                <img src={shopImage} alt="" />
                                                        
                                                <br />
                                                <br />
                                                    
                                                <div className="file btn btn-lg btn-primary">Change Photo<input type="file" name="file" /></div>
                                                    
                                            </div>

                                        </div>
    
                                    </div>
                    
                                </div>
                
                            </div>

                            <div className="col-6">

                                <div className="row">

                                    <div className="col-4"><label className="shop-info-labels">Shop logo</label></div>

                                    <div className="col-8">

                                        <div className="text-center">

                                            <div className="shop-img profile-img">

                                                <img src={shopLogo}alt="" />
                                                
                                                <br />
                                                <br />

                                                <div className="file btn btn-lg btn-primary">Change Photo<input type="file" name="file" /></div>
                                        
                                            </div>

                                        </div>

                                    </div>
                
                                </div>

                            </div>

                        </div>

                        <div className="form-outline mt-5 mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label  for="cars">Shop name</label>
                                </div>

                                <div className="col-9">
                                    {edit && <input type="text"  id="form2Example1" placeholder="username" onChange={handleShopname} value={shopname} className="form-control" />}
                                    {!edit && <input type="text" disabled  id="form2Example1" placeholder="username" onChange={handleShopname} value={shopname} className="form-control" />}
                                </div>

                            </div>

                        </div>

                        {/* <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label for="cars">Discription</label>
                                </div>

                                <div className="col-9">
                                    <textarea type="text" disabled className="shop-prof-desc form-control" id="form2Example1" placeholder="username" value={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and th"} />
                                </div>

                            </div>

                        </div> */}
 
 {edit &&   <div className="col-sm-12 text-center mt-2">
                      <button type="button" className="save-btn  btn-block mb-4" onClick={handelSave}>Save</button>
                      </div>}
{!edit && 
                      <div className="col-sm-12 text-center mt-2">
                      <button type="button" className="edit-btn btn btn-secondary btn-block mb-4" onClick={handleEdit}>Edit</button>
                      </div>}

                        <br/>

                        <button type="button" className="location-btn" onClick={handelUpdateLocation}>Update location</button>



    </form>
    </div>

                
                </div>

        </div>



    )
}

export default VendorProfile



 
