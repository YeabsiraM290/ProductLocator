import React, { Component }  from 'react';
import "../assets/css/vendorProfile.css";

const VendorProfile = () => {

    return (

        <div className="row">

            <div className="col-6">

                <div className="container text-center vendor-profile-con">

                    <form>

                        <div className="text-center">

                            <div className="vprofile-img">

                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg" alt="" />
                                
                                <br />
                                <br />

                                <div className="file btn btn-lg btn-primary">Change Photo<input type="file" name="file" /></div>

                            </div>
                            
                        </div>
                       
                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label className="labels" for="cars">Username</label>
                                </div>

                                <div className="col-9">
                                    <input type="text" disabled id="form2Example1" placeholder="username" value={"Yeabsira"} className="form-control" />
                                </div>

                            </div>

    
                        </div>

                        <div className="form-outline mb-4">

                            <div className="row">
 
                                <div className="col-3">
                                    <label className="labels" for="cars">Email</label>
                                </div>

                                <div className="col-9">
                                    <input type="email" disabled id="form2Example1" placeholder="username" value={"Yeabsira@gmail.com"} className="form-control" />
                                </div>

                            </div>

                        </div>

                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label className="labels" for="cars">Phone number</label>
                                </div>

                                <div className="col-9">
                                    <input type="number" disabled id="form2Example1" placeholder="username" value={"097542457"} className="form-control" />
                                </div>

                            </div>

                        </div>


                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label className="labels" for="cars">Password</label>
                                </div>

                                <div className="col-9">
                                    <input type="text" disabled id="form2Example1" placeholder="username" value={"*********"} className="form-control" />
                                </div>

                            </div>

                        </div>  

                        <button type="button" className="edit-btn btn btn-secondary btn-block mb-4">Edit</button>

                        <br/>
                    
                        <a type="button" className="del-account">Terminate account</a>

                    </form>

                </div>

                
            </div>

            <div className="col-6">

                <div className="container text-center vendor-profile-shop-con">

                    <form>

                        <div className="row">

                            <div className="col-6">

                                <div className="row">

                                    <div className="col-4"><label className="shop-info-labels">Shop image</label></div>

                                    <div className="col-8">

                                        <div className="text-center">

                                            <div className="profile-img">

                                                <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mike-petrucci-c9FQyqIECds-unsplash.jpg" alt="" />
                                                        
                                                <br />
                                                <br />
                                                    
                                                <div className="file btn btn-lg btn-primary">Change Photo<input type="file" name="file" /></div>
                                                    
                                            </div>

                                        </div>
    
                                    </div>
                    
                                </div>
                
                            </div>

                            <div className="col-6">

                                <div className="row">

                                    <div className="col-4"><label className="shop-info-labels">Shop logo</label></div>

                                    <div className="col-8">

                                        <div className="text-center">

                                            <div className="shop-img profile-img">

                                                <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mike-petrucci-c9FQyqIECds-unsplash.jpg" alt="" />
                                                
                                                <br />
                                                <br />

                                                <div className="file btn btn-lg btn-primary">Change Photo<input type="file" name="file" /></div>
                                        
                                            </div>

                                        </div>

                                    </div>
                
                                </div>

                            </div>

                        </div>

                        <div className="form-outline mt-5 mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label  for="cars">Shop name</label>
                                </div>

                                <div className="col-9">
                                    <input type="text" disabled id="form2Example1" placeholder="username" value={"Yeabsira"} className="form-control" />
                                </div>

                            </div>

                        </div>

                        <div className="form-outline mb-4">

                            <div className="row">

                                <div className="col-3">
                                    <label for="cars">Discription</label>
                                </div>

                                <div className="col-9">
                                    <textarea type="text" disabled className="shop-prof-desc form-control" id="form2Example1" placeholder="username" value={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and th"} />
                                </div>

                            </div>

                        </div>
 
                        <button type="button" className="edit-btn btn btn-secondary btn-block mb-4">Edit</button>

                        <br/>

                        <button type="button" className="location-btn">Update location</button>



    </form>
    </div>

                
                </div>

        </div>



    )
}

export default VendorProfile



 
