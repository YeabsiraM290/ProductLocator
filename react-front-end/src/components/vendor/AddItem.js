import "../assets/css/addItem.css";

const AddItem = () =>{


  return(

    <div className="container text-center addItem-container ">

      <p className="text-center addItem-title"> Add new item </p>
        
      <form>

        <div className="row mt-5">

          <div className="col-3">
            <label for="shop_img">Name</label>
          </div>

          <div className="col-9">
            <input type="text" name="name" id="name" className="form-control" />
          </div>

        </div>

        <div className="row mt-4">

          <div className="col-3">
            <label for="shop_img">Price</label>
          </div>

          <div className="col-9">
            <input type="number" name="name" id="name" className="form-control" />
          </div>

        </div>

        <div className="row mt-4">

          <div className="col-3">
            <label for="shop_img">Discription</label>
          </div>

          <div className="col-9">
          <textarea type="number" id="form2Example1" placeholder="Discription" className="form-control" />
          </div>

        </div>

        <div className="form-outline mb-4 mt-4">

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

  
  );
};

export default AddItem; 
