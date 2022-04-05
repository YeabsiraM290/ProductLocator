import { useNavigate } from 'react-router-dom';
import "../assets/css/signup.css";

const Signup = () => {


    const history = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        history('/home');
    };

    const login = (e) => {

        e.preventDefault();
        history('/login')
    }

    return (

        <div className="container text-center signup-container">

            <p className="signup-title"> Welcome </p>

            <form>

                <div className="form-outline mb-4">
                    <input type="email" id="email" placeholder="email" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="username" placeholder="username" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="number" id="pno" placeholder="phone number" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" placeholder="password" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="conpassword" placeholder="conform password" className="form-control" />
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