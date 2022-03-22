
const AddItem = () =>{


  return(

    <div>

  <div className="container text-center signup-con">

  <p className="text-center main-title"> Add new item </p>
       
          <form>

     
              <div className="form-outline mb-4">
                  <input type="text" id="form2Example1" placeholder="Name" className="form-control" />

              </div>

              <div className="form-outline mb-4">
                  <input type="number" id="form2Example1" placeholder="Price" className="form-control" />

              </div>

              <div className="form-outline mb-4">
                  <textarea type="number" id="form2Example1" placeholder="Discription" className="form-control" />

              </div>

              <div className="form-outline mb-4">

                <div className="row">

                  <div className="col-3">
                  <label for="shop_img">Item image</label>
                  </div>

                  <div className="col-9">
                  <input type="file" name="shop_img" id="form2Example1" className="form-control" />
                  </div>
                </div>
            
              </div>

        
           

              <button type="button" className="login-btn btn btn-primary btn-block mb-4">Add</button>

          </form>
      </div>

      </div>
  );
};

export default AddItem; 
