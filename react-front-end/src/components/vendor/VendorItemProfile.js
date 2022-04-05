import "../assets/css/itemControl.css";
import ItemHorizonatlCard from "../ItemHorizontalCard";

const VendorItemControl = () => {

    return(

        <div className="row mt-3 mb-5">

          <a className="add-item-btn" href="/add_item">Add new item  {' '}</a>
          
          <div className="col-5 item-control-con">

            <p className="text-center item-control-titles mt-2">Your Products</p>

            <div className="item-control-itemlist">
              {ItemHorizonatlCard()}
              {ItemHorizonatlCard()}
              {ItemHorizonatlCard()}
              {ItemHorizonatlCard()}
              {ItemHorizonatlCard()}
            </div>
                
          </div>

          <div className="col-7 item-control-con">

            <div className="container text-center">

              <p className="text-center item-control-titles mt-2"> Item information </p>
     
              <form>

                <div className="form-outline mb-4">

                  <div className="row">

                    <div className="col-3">
                      <label for="shop_img">Item name</label>
                    </div>

                    <div className="col-9">

                      <div className="form-outline mb-4">
                          <input disabled type="text" id="form2Example1" value="Item name" className="form-control" />
                      </div>

                    </div>

                  </div>

                </div>

                <div className="form-outline mb-4">

                  <div className="row">

                    <div className="col-3">
                      <label for="shop_img">Discription</label>
                    </div>

                    <div className="col-9">

                      <div className="form-outline mb-4">
                        <textarea type="text" disabled className="shop-prof-desc form-control" id="form2Example1" placeholder="username" value={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and th"} />
                      </div>

                    </div>

                  </div>

                </div>

                <div className="form-outline mb-4">

                  <div className="row">

                    <div className="col-3">
                      <label for="shop_img">Price</label>
                    </div>

                    <div className="col-9">

                      <div className="form-outline mb-4">
                        <input type="number" disabled id="form2Example1" placeholder="Price" value="2000" className="form-control" />
                      </div>

                    </div>

                  </div>

              </div>

              <div className="form-outline mb-4">

                <div className="row">

                  <div className="col-3">
                    <label for="shop_img">Item image</label>
                  </div>

                  <div className="col-9 img-view">
                    <img className="item-control-imgs"  src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg" alt="First slide" width="200px" height="100px" />
                    <img className="item-control-imgs"  src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg" alt="First slide" width="200px" height="100px" />
                    <img className="item-control-imgs"  src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg" alt="First slide" width="200px" height="100px" />
                    <img className="item-control-imgs"  src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg" alt="First slide" width="200px" height="100px" />
                  </div>

                </div>
          
              </div>

            <button type="button" className="edit-btn btn btn-primary btn-block mt-4 mb-5">Edit</button>

            <br/>

            <a type="button" className="del-account mb-5">Delete item</a>

          </form>

      </div>

    </div>

  </div>

    )
} 

export default VendorItemControl