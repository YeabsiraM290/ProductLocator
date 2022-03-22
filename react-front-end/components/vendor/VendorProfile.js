import "../assets/css/login.css";

const VendorProfile = () => {

    return (

        <div className="row">

            <p className="text-center title mt-5">Profile</p>

            <div className="col-lg-6">

        <div className="container text-center vendor-profile-con">
        <p className="text-center title"> Profile </p>
        <form>


                     <div className="text-center">
                         <div className="profile-img">
                             <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg" alt="" />
                             <br />
                             <br />
                             <div className="file btn btn-lg btn-primary">
                                 Change Photo
                             <input type="file" name="file" />

                         </div>

                          
                        </div>
                     </div>

                     <div className="form-outline mb-4">
                     <div className="row">

                    
              <div className="col-3">
              <label className="labels" for="cars">Username</label>
            </div>

            <div className="col-9">
            <input type="text" id="form2Example1" placeholder="username" value={"Yeabsira"} className="form-control" />
            </div>
            </div>

    
    </div>


    <div className="form-outline mb-4">
                     <div className="row">

                    
              <div className="col-3">
              <label className="labels" for="cars">Email</label>
            </div>

            <div className="col-9">
            <input type="email" id="form2Example1" placeholder="username" value={"Yeabsira@gmail.com"} className="form-control" />
            </div>
            </div>

    
    </div>


    <div className="form-outline mb-4">
                     <div className="row">

                    
              <div className="col-3">
              <label className="labels" for="cars">Phone number</label>
            </div>

            <div className="col-9">
            <input type="number" id="form2Example1" placeholder="username" value={"097542457"} className="form-control" />
            </div>
            </div>

    
    </div>


    <div className="form-outline mb-4">
                     <div className="row">

                    
              <div className="col-3">
              <label className="labels" for="cars">Password</label>
            </div>

            <div className="col-9">
            <input type="text" id="form2Example1" placeholder="username" value={"*********"} className="form-control" />
            </div>
            </div>

    
    </div>  

    <div className="row">

                    
    <div className="col-6">
    <button type="button" className="edit-btn btn btn-secondary btn-block mb-4">Edit</button>
    </div>

    <div className="col-6">
    <button type="button" className="save-btn btn btn-success btn-block mb-4">Save</button>
    </div>
    </div>

    <button type="button" class="btn delete-btn btn-danger">Terminate account</button>

    </form>
    </div>

                
                </div>


            <div className="col-6">



        <div className="container text-center vendor-profile-con">
        <p className="text-center title"> Shop information </p>
        <form>

        <div className="row">

            <div className="col-6">

                <div className="row">

                    <div className="col-3"><label className="labels">Shop image</label></div>
                    <div className="col-9">


<div className="text-center">
             <div className="shop-img profile-img">
                 <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg" alt="" />
                 <br />
                 <br />
                 <div className="file btn btn-lg btn-primary">
                     Change Photo
                 <input type="file" name="file" />

             </div>

              
            </div>
         </div>
    
    
    </div>
                    
                    </div>
                
                </div>

                <div className="col-6">

            <div className="row">

                <div className="col-3"><label className="labels">Shop logo</label></div>
                <div className="col-9">


            <div className="text-center">
            <div className="shop-img profile-img">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg" alt="" />
            <br />
            <br />
            <div className="file btn btn-lg btn-primary">
                Change Photo
            <input type="file" name="file" />

            </div>


            </div>
            </div>


            </div>
                
                </div>

            </div>


      
            
            </div>


                     <div className="form-outline mt-5  mb-4">
                     <div className="row">

                    
              <div className="col-3">
              <label className="labels" for="cars">Shop name</label>
            </div>

            <div className="col-9">
            <input type="text" id="form2Example1" placeholder="username" value={"Yeabsira"} className="form-control" />
            </div>
            </div>

    
    </div>



    <div className="form-outline mb-4">
                     <div className="row">

                    
              <div className="col-3">
              <label className="labels" for="cars">Discription</label>
            </div>

            <div className="col-9">
            <textarea type="text" id="form2Example1" placeholder="username" value={"........"} className="form-control" />
            </div>
            </div>

    
    </div>
 

    <div className="row">

                    
    <div className="col-6">
    <button type="button" className="edit-btn btn btn-secondary btn-block mb-4">Edit</button>
    </div>

    <div className="col-6">
    <button type="button" className="save-btn btn btn-success btn-block mb-4">Save</button>
    </div>
    </div>

    <button type="button" class="btn save-btn btn-primary">Update location</button>



    </form>
    </div>

                
                </div>

        </div>



    )
}

export default VendorProfile



 
