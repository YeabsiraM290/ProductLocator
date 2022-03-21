
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import "../../assets/css/login.css";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep }) => {
  //creating error state for validation
  // const [error, setError] = useState(false);

  // // after form submit validating the form data using validator
  // const submitFormData = (e) => {
  //   e.preventDefault();

  //   // checking if value of first name and last name is empty show error else take to step 2
  //   if (
  //     validator.isEmpty(values.firstName) ||
  //     validator.isEmpty(values.lastName)
  //   ) {
  //     setError(true);
  //   } else {
  //     nextStep();
  //   }
  // };

  return (
    // <div>
    //   <Card style={{ marginTop: 100 }}>
    //     <Card.Body>
    //       <Form>
    //         <Form.Group className="mb-3">
    //           <Form.Label>First Name</Form.Label>
    //           <Form.Control
    //             // style={{ border: error ? "2px solid red" : "" }}
    //             name="firstName"
    //             // defaultValue={values.firstName}
    //             type="text"
    //             placeholder="First Name"
                
    //           />

    //         </Form.Group>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Last Name</Form.Label>
    //           <Form.Control
    //             // style={{ border: error ? "2px solid red" : "" }}
    //             name="lastName"
    //             // defaultValue={values.lastName}
    //             type="text"
    //             placeholder="Last Name"
                
    //           />
          
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Continue
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    // </div>
    <div>
      <p className="text-center main-title"> Vendor registration </p>
    

    <div className="container text-center signup-con">
            <p className="text-center .sub-title"> Your information </p>
            <form>


                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" placeholder="email" className="form-control" />

                </div>

                <div className="form-outline mb-4">
                    <input type="text" id="form2Example1" placeholder="username" className="form-control" />

                </div>


                <div className="form-outline mb-4">
                    <input type="number" id="form2Example1" placeholder="phone number" className="form-control" />

                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" placeholder="password" className="form-control" />

                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" placeholder="conform password" className="form-control" />

                </div>

                <button type="button" className="login-btn btn btn-primary btn-block mb-4">Next</button>

            </form>
        </div>

        </div>
  );
};

export default StepOne;