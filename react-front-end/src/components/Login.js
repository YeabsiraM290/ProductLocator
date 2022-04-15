import { useNavigate } from 'react-router-dom';
import "./assets/css/login.css";

const Login = () => {

    const history = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        history('/home');
    };

    const signup = (e) => {

        e.preventDefault();
        history('/signup')
    }

    return (

        <div className="container text-center login-container">

            <p className="login-title"> Login </p>

            <form>

                <div className="form-outline mb-4">

                    <input type="email" id="email" placeholder="username" className="form-control" />

                </div>

                <div className="form-outline mb-4">

                    <input type="password" id="password" placeholder="password" className="form-control" />

                </div>

                <div className="row mb-4">

                    <div className="col d-flex justify-content-center">

                        <div className="form-check">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="rememberme"
                            />

                            <label className="form-check-label" for="rememberme"> Remember me </label>

                        </div>

                    </div>

                    <div className="col">

                        <a className="for-pass small-text links" href="/forget_password">Forgot password?</a>

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