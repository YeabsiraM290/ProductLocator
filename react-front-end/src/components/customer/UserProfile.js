import React, { Component }  from 'react';
import '../assets/css/profile.css'

const UserProfile = () => {

    return (

      <div className="container mt-5 mb-5">

        <div className="main-body">

          <div className="row gutters-sm">

            <div className="col-md-4 mb-3">

              <div className="card">

                <div className="card-body">

                  <div className="d-flex flex-column align-items-center text-center">

                    <div class="profile-img">

                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg" alt=""/>
                      
                        <div class="file btn btn-lg btn-primary">Change Photo<input type="file" name="file"/></div>

                    </div>

                    <div className="mt-3">
                      <h4>User Name</h4>
                      <a type="button" className="del-account">Terminate account</a>
                    </div>

                  </div>

                </div>

              </div>
   
            </div>

            <div className="col-md-8">

              <div className="card mb-3">

                <div className="card-body">

                  <form>
                    <div className="row">
                      
                      <div className="col-sm-3">
                        <h6 className="mb-0">Username</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="text" id="username"  value={"username"} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>

                    <div className="row">

                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="email" id="email"  value={"email@email.email"} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>
                    <div className="row">

                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="number" id="pno"  value={"0932566778"} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>

                    <div className="row">

                      <div className="col-sm-3">
                        <h6 className="mb-0">password</h6>
                      </div>

                      <div className="col-sm-9 text-secondary">
                        <input type="password" id="pass"  value={"0932566778"} disabled className="form-control" />
                      </div>

                    </div>

                    <hr/>
         
                    <div className="row">

                      <div className="col-sm-12 text-center mt-2">
                      <button type="button" className="edit-btn btn btn-secondary btn-block mb-4">Edit</button>
                      </div>

                    </div>

                  </form>

                </div>
               
              </div>

            </div>

          </div>

        </div>

    </div>
  
    )
}

export default UserProfile



