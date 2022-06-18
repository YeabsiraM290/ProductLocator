import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./assets/css/login.css";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setError_message] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
        };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
        };

        const send_data = async () => {

            try{
             const response = await fetch('http://localhost:8000/api/token/', {
                 method: 'POST',
                 headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                    
                     username: username,
                     password:password,
                   
                 })
               })

               let user = await response.json()
              
               console.log(user)
               if (response.status == 200){
                   
                   setSubmitted(true)
                   setError(false)
                   console.log(user)
                   sessionStorage.clear()
                   sessionStorage.setItem("access_token", user.access)
                   sessionStorage.setItem("refresh_token", user.refresh)
                   sessionStorage.setItem("id", user.account['id'])
                   sessionStorage.setItem("type", user.account['type'])

                   if(user.account['type'] == 'VENDOR'){
                    sessionStorage.setItem("cat", user.account['more']['category'])
                   }

                   setTimeout(toHome, 500)
                   function toHome(){
                       
                       home()
                   }
               }
               else{
                   setError(true)
                   setError_message('Wrong username or password')
               }
               
            }
            catch (error) {
             console.log(error);
           }
         }

         const handleSubmit = (e) => {
            e.preventDefault();
     
            if (username === ''  || password === '' ) {
                setError(true);
                setError_message('Fill all empty fields');
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
                <h4 className='success-message'>success!!</h4>
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

    const home = () => {

        history('/home')
    }

    const signup = () => {

        history('/signup')
    }


    return (

        <div className="container text-center login-container">

            <p className="login-title"> Login </p>
            {showerrorMessage()}
            {successMessage()}

            <form>

                <div className="form-outline mb-4">

                    <input type="email" id="email" onChange={handleUsername} value={username}  placeholder="username" className="form-control" />

                </div>

                <div className="form-outline mb-4">

                    <input type="password" id="password" onChange={handlePassword} value={password}  placeholder="password" className="form-control" />

                </div>

                <div className="row mb-4">

                    <div className="col d-flex justify-content-center">

                        <div className="form-check">


                        </div>

                    </div>

                    <div className="col">

                       

                    </div>

                </div>

                <button type="submit" className="login-btn btn btn-primary btn-block mb-4" onClick={handleSubmit} >Sign in</button>

                <div className="text-center">

                    <p className="small-text">Not a member? <a className='links' onClick={signup}>Register</a></p>

                </div>

            </form>
            
        </div>

    );
}

export default Login