import React, { Component }  from 'react';
import '../assets/css/profile.css'
import { ValidateEmail, Validatephonenumber, ValidateLength, ValidatePassword } from '../../Helpers/validation';
import { useState } from 'react';

const UserProfile = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conform_password, setConform_password] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [profile_pic, setProfile_pic] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setError_message] = useState('')

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


    async function get_data() {

      let response = await fetch('http://localhost:8000/api/customer/', {
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

          var profile= ''
          
          data.forEach(user => {

            if (user['id'] == sessionStorage.getItem('id')){
              profile = user
            }

            setEmail(profile['email'])
            setUsername(profile['username'])
            setPassword(profile['password'])
            setPhone_number(profile['phone_no'])
            setProfile_pic(profile['profile_pic'])
            
          });

          console.log(profile)


        
         }) .catch(function(err) {
          console.log(err)
      });
         
      }
      catch (error) {
       console.log(error);
     }
   }
   send_data()
            // Handling the form submission
            const handleSubmit = (e) => {
              e.preventDefault();
       
              if (username === '' || email === '' || password === '' || phone_number === '' || conform_password === '') {
                  setError(true);
                  setError_message('Fill all empty fields');
              }
              else if(password != conform_password){
                  setError(true);
                  setError_message('Re enter correct password')
              }   
              else if(!ValidatePassword(password)){
                  setError(true);
                  setError_message('Password must be password between 8 to 15 characters, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
              } 
              else if(!ValidateLength(4, 8, username)[0]){
                  setError(true)
                  setError_message("Username ".concat(ValidateLength(4, 8, username)[1]))
              }
              else if(!ValidateEmail(email)){
                  setError(true)
                  setError_message('Enter valid email address')
              }
              else if(!Validatephonenumber(phone_number)){
                  setError(true)
                  setError_message('Enter valid phone number')
              }
         
              };
      
              const successMessage = () => {
                  return (
                  <div
                  className="success"
                  style={{
                  display: submitted ? '' : 'none',
                  }}>
                  <h4 className='success-message'>User {username} successfully registered!!</h4>
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

    return (

      <div className="container mt-5 mb-5">

        <div className="main-body">

          <div className="row gutters-sm">

            <div className="col-md-4 mb-3">

              <div className="card">

                <div className="card-body">

                  <div className="d-flex flex-column align-items-center text-center">

                    <div class="profile-img">

                      <img src={profile_pic} alt=""/>
                      
                        <div class="file btn btn-lg btn-primary">Change Photo<input type="file" name="file"/></div>

                    </div>

                    <div className="mt-3">
                      <h4>{username}</h4>
                      <a type="button" className="del-account">Terminate account</a>
                    </div>

                  </div>

                </div>

              </div>
   
            </div>

            <div className="col-md-8">

              <div className="card mb-3">

                <div className="card-body">

                  <form>
                    <div className="row">
                      
                      <div className="col-sm-3">
                        <h6 className="mb-0">Username</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="text" id="username"  onChange={handleUsername} value={username} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>

                    <div className="row">

                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="email" id="email"  onChange={handleEmail} value={email} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>
                    <div className="row">

                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="number" id="pno"  onChange={handlePhone_number} value={phone_number} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>

                    <div className="row">

                      <div className="col-sm-3">
                        <h6 className="mb-0">password</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="password" id="pass"  onChange={handlePassword} value={password} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>
         
                    <div className="row">

                      <div className="col-sm-12 text-center mt-2">
                      <button type="button" className="edit-btn btn btn-secondary btn-block mb-4">Edit</button>
                      </div>

                    </div>

                  </form>

                </div>
               
              </div>

            </div>

          </div>

        </div>

    </div>
  
    )
}

export default UserProfile



