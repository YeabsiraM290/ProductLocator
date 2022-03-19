import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep }) => {
  // ({ nextStep, handleFormData, prevStep, values }) => 
   //creating error state for validation
  // const [error, setError] = useState(false);

  //   // after form submit validating the form data using validator
  // const submitFormData = (e) => {
  //   e.preventDefault();

  //    // checking if value of first name and last name is empty show error else take to next step
  //   if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
  //     setError(true);
  //   } else {
  //     nextStep();
  //   }
  // };
  // return (
  //   <>
  //     <Card style={{ marginTop: 100 }}>
  //       <Card.Body>
  //         <Form onSubmit={submitFormData}>
  //           <Form.Group className="mb-3">
  //             <Form.Label>Age</Form.Label>
  //             <Form.Control
  //               style={{ border: error ? "2px solid red" : "" }}
  //               type="number"
  //               placeholder="Age"
  //               onChange={handleFormData("age")}
  //             />
  //             {error ? (
  //               <Form.Text style={{ color: "red" }}>
  //                 This is a required field
  //               </Form.Text>
  //             ) : (
  //               ""
  //             )}
  //           </Form.Group>
  //           <Form.Group className="mb-3">
  //             <Form.Label>Email</Form.Label>
  //             <Form.Control
  //               style={{ border: error ? "2px solid red" : "" }}
  //               type="email"
  //               placeholder="email"
  //               onChange={handleFormData("email")}
  //             />
  //             {error ? (
  //               <Form.Text style={{ color: "red" }}>
  //                 This is a required field
  //               </Form.Text>
  //             ) : (
  //               ""
  //             )}
  //           </Form.Group>
  //           <div style={{ display: "flex", justifyContent: "space-around" }}>
  //             <Button variant="primary" onClick={prevStep}>
  //               Previous
  //             </Button>

  //             <Button variant="primary" type="submit">
  //               Submit
  //             </Button>
  //           </div>
  //         </Form>
  //       </Card.Body>
  //     </Card>
  //   </>
  // );

  return(

    <div>
    <p className="text-center main-title"> Vendor registration </p>
  

  <div className="container text-center signup-con">
          <p className="text-center .sub-title"> Shop information </p>
          <form>

          <div className="form-outline mb-4">
                  <p className="notice"> * Regester at your shop location</p>

              </div>
              <div className="form-outline mb-4">
                  <input type="text" id="form2Example1" placeholder="Shop name" className="form-control" />

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

              <button type="button" className="login-btn btn btn-primary btn-block mb-4">Next</button>

          </form>
      </div>

      </div>
  );
};

export default StepTwo;