import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ nextStep }) => {

    //destructuring the object from values
  // const { firstName, lastName, age, email } = values;
  // return (
  //   <>
  //     <Card style={{ marginTop: 100, textAlign: "left" }}>
  //       <Card.Body>
  //         <p>
  //           <strong>First Name :</strong> {firstName}{" "}
  //         </p>
  //         <p>
  //           <strong>Last Name :</strong> {lastName}{" "}
  //         </p>
  //         <p>
  //           <strong>Age :</strong> {age}{" "}
  //         </p>
  //         <p>
  //           <strong>Email :</strong> {email}{" "}
  //         </p>
  //       </Card.Body>
  //     </Card>
  //   </>
  // );

  return(

    <div>
    <p className="text-center main-title"> Vendor registration </p>
  
    <div className="container text-center">

    <p className="text-center .sub-title"> Select Plan </p>

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
              <button className="btn btn-outline-primary btn-lg">Select</button>
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
              <button className="btn btn-outline-primary btn-lg">Select</button>
            </div>
          </div>
        </div>
        
        </div>

    </div>

    </div>
  )
};

export default Final;