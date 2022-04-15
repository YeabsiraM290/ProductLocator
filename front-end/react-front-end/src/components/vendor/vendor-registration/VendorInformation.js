import "../../assets/css/vendorSignup.css";
import { useNavigate } from 'react-router-dom';
import React, { Component }  from 'react';
import { useState } from 'react';
import { ValidateEmail, Validatephonenumber, ValidateLength, ValidatePassword } from '../../../Helpers/validation'

const StepOne = props => {

    let history = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conform_password, setConform_password] = useState('');
    const [phone_number, setPhone_number] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setError_message] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value);
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
        else {

            var vendor_info = [username, email, password, phone_number]
            history( '/vendor_signup_2',{state: {detail:vendor_info}} )
      
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

        <div className="container text-center vendor-signup-container">

            <p className="text-center vendor-signup-title"> Your information </p>
            {showerrorMessage()}
            {successMessage()}

            <form>

                <div className="form-outline mb-4">
                    <input type="email" id="email" onChange={handleEmail} value={email}  placeholder="email" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="username" onChange={handleUsername} value={username}  placeholder="username" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="number" id="pno" onChange={handlePhone_number} value={phone_number} placeholder="phone number" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="pass" onChange={handlePassword} value={password} placeholder="password" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="repass" onChange={handleConform_password} value={conform_password}  placeholder="Re-enter password" className="form-control" />
                </div>

                <button type="button" onClick={handleSubmit} className="login-btn btn btn-primary btn-block mb-4">Next</button>

            </form>
    
        </div>

    );
};

export default StepOne;