import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../assets/css/signup.css";
import { ValidateEmail, Validatephonenumber, ValidateLength, ValidatePassword } from '../../Helpers/validation';

const Signup = () => {

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

    const send_data = async () => {

       try{
        const response = await fetch('http://localhost:8000/api/customer/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password:password,
                phone_no:phone_number,
            })
          })

          if (response.status == 201){
              setSubmitted(true)
              setError(false)
              setTimeout(toLogin, 500)
              function toLogin(){
                  login()
              }
          }
          else{
              setError(true)
              setError_message(response.statusText)
          }
          
       }
       catch (error) {
        console.log("error");
      }
    }

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


    const history = useNavigate();

    const login = () => {

        history('/login')
    }

    return (

        <div className="container text-center signup-container">

            <p className="signup-title"> Welcome </p>
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
                    <input type="number" id="pno" onChange={handlePhone_number} value={phone_number}  placeholder="phone number" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" onChange={handlePassword} value={password}  placeholder="password" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="conpassword" onChange={handleConform_password} value={conform_password}  placeholder="conform password" className="form-control" />
                </div>

                <button type="submit" className="signup-btn btn btn-primary btn-block mb-4" onClick={handleSubmit}>Signup</button>

                <div className="text-center">
                    <p className="small-text">Already have an acount? <a onClick={login} className="links">Login</a></p>
                </div>

            </form>

        </div>

    );
}

export default Signup