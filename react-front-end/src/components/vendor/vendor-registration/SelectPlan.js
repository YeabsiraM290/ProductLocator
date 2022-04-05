

const Final = () => {

  return(

    <div className="container mt-5 vendor-signup-plan-con text-center">

      <p className="text-center vendor-signup-title"> Select Plan </p>

        <div className="row ">
     
          <div className="col-lg-6   col-md-12 mb-4">
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">Basic</h5>
                    <br/><br/>
                    <span className="h2">Free</span>
                    <br/><br/>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Upto 50 products</li>
                  <li className="list-group-item"> Dapibus ac facilisis in</li>
                  <li className="list-group-item"> Vestibulum at eros</li>
                </ul>
                <div className="card-body text-center">
                  <button className="btn login-btn btn-primary btn-lg">Select</button>
                </div>
              </div>
            </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <div className="text-center p-3">
                  <h5 className="card-title">Premium</h5>
                  <br/><br/>
                  <span className="h2">50 birr</span>/month
                  <br/><br/>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Unlimited listing</li>
                <li className="list-group-item"> Advertising items</li>
                <li className="list-group-item"> Vestibulum at eros</li>
              </ul>
              <div className="card-body text-center">
                <button className="btn login-btn btn-primary btn-lg">Select</button>
              </div>
            </div>
          </div>
        
        </div>

    </div>


  )
};

export default Final;