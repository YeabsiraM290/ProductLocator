import "../../assets/css/vendorSignup.css";
import { useNavigate } from 'react-router-dom';

const StepOne = () => {


    const history = useNavigate();

    const next = (e) => {

        e.preventDefault();
        history('/vendor_signup_2')
    }

    return (

        <div className="container text-center vendor-signup-container">

            <p className="text-center vendor-signup-title"> Your information </p>

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
                    <input type="password" id="pass" placeholder="password" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="repass" placeholder="Re-enter password" className="form-control" />
                </div>

                <button type="button" onClick={next} className="login-btn btn btn-primary btn-block mb-4">Next</button>

            </form>
    
        </div>

    );
};

export default StepOne;