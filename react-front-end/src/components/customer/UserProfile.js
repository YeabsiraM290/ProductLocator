const UserProfile = () => {

    return (

        // <div className="container emp-profile">

        //     <form>
        //         <div className="row">

        //             <div className="col-md-4">
        //                 <div className="profile-img">
        //                     <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg" alt="" />
        //                     <div className="file btn btn-lg btn-primary">
        //                         Change Photo
        //                         <input type="file" name="file" />

        //                     </div>

        //                     <input className='text-center username userInfo form-control' type="text" value="Yeabsira" id="name"></input>

        //                 </div>
        //             </div>
        //             <div className="col-md-6">
        //                 <div className="profile-head">

        //                     <div className="row">

        //                         <div className="col-md-8">
        //                             <div className='text-center mb-5'>
        //                                 <p> <h3>Body Information</h3></p>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='age'>Age</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[age]"   className="form-control userInfo" id="age" placeholder="21"></input>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='sex'>Sex</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <select className="form-control userInfo" name="user[sex]"   id="sex">
        //                                         <option >Male</option>
        //                                         <option>Female</option>
        //                                     </select>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='Height'>Height</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[height]"   className="form-control userInfo" id="Height" placeholder="21"></input>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='Weight'>Weight</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[weight]" className="form-control userInfo" id="Weight" placeholder="21"></input>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='Waist'>Waist</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[waist]"  className="form-control userInfo" id="Waist" placeholder="21"></input>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='Chest'>Chest</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[chest]"  className="form-control userInfo" id="Chest" placeholder="21"></input>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='Hand'>Hand</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[hand]"  className="form-control userInfo" id="Hand" placeholder="21"></input>
        //                                 </div>
        //                             </div>

        //                             <div className="row form-group ml-4">
        //                                 <div className="col-md-6">
        //                                     <label htmlFor='leg'>Leg</label>
        //                                 </div>
        //                                 <div className="col-md-6">
        //                                     <input type="number" name="user[leg]" className="form-control userInfo" id="leg" placeholder="21"></input>
        //                                 </div>
        //                             </div>


        //                             <div className="row form-group ml-5 mt-5 text-center">
        //                                 <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Save" />
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-2">
        //                 <input className="profile-edit-btn delete" name="delete" value="Terminate account" />
        //             </div>
        //         </div>

        //     </form>

        // </div>


        <div className="container text-center user-profile-con">
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


    )
}

export default UserProfile



