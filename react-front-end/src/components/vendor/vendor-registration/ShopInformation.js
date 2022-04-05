import "../../assets/css/vendorSignup.css";
import { useNavigate } from 'react-router-dom';

const StepTwo = () => {

  const history = useNavigate();

  const next = (e) => {

      e.preventDefault();
      history('/vendor_signup_3')
  }

  return(

    <div className="container text-center vendor-signup-container">

      <p className="text-center vendor-signup-title"> Shop information </p>

      <div className="form-outline mb-4">
        <p className="notice"> * Regester at your shop location</p>
      </div>

      <form>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="shop_img">Shop name</label>
            </div>

            <div className="col-9">
              <input type="text" name="name" id="name" className="form-control" />
            </div>

          </div>

        </div>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="shop_img">Shop image</label>
            </div>

            <div className="col-9">
              <input type="file" name="shop_img" id="form2Example1" className="form-control" />
            </div>

          </div>
            
        </div>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="shop_img">Shop logo</label>
            </div>

            <div className="col-9">
              <input type="file" name="shop_img" id="form2Example1"  className="form-control" />
            </div>

          </div>

        </div>

        <div className="form-outline mb-4">

          <div className="row">

            <div className="col-3">
              <label for="cars">Catagory</label>
            </div>

            <div className="col-9">

              <select class="form-select" aria-label="Default select example">

                <option selected>Resturant</option>
                <option value="1">Gas station</option>
                <option value="2">Hardware store</option>
                <option value="3">Boutique</option>
                
              </select>

            </div>

          </div>
            
        </div>

        <button type="button" onClick={next} className="login-btn btn btn-primary btn-block mb-4">Next</button>

      </form>
  
    </div>

  );
};

export default StepTwo;