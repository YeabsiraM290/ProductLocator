import { Carousel } from "react-bootstrap"
const SingleItem = () =>{

    return(

        <div className="row mt-5">

            <div className="col-6 slide-show">
            <Carousel>
  <Carousel.Item>
    <img
      className=" img-fluid slides"
      src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid slides"
      src="https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=onur-binay-auf3GwpVaOM-unsplash.jpg"
      alt="Second slide"
    />
 </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid slides"
      src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg"
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
                
                </div>

            <div className="col-5 info">
            <p className="text-center main-title"> Item information </p>
          

                    <div className="container text-center">

                   
                    <div className="row">

                    <div className="col-3">
                    <label for="shop_img">Item name</label>
                    </div>

                    <div className="col-9">

                                <p>PC</p>

                            
                    </div>
                    </div>

                    </div>

                    <div className="container text-center">

                   
                    <div className="row">

                    <div className="col-3">
                    <label for="shop_img">Discription</label>
                    </div>

                    <div className="col-9">

                                <p>Discription</p>

                            
                    </div>
                    </div>

                    </div>

                    <div className="container text-center">

                    <div className="row">

                    <div className="col-3">
                    <label for="shop_img">Price</label>
                    </div>

                    <div className="col-9">

                                <p>2000</p>

                            
                    </div>
                    </div>

                    </div>

                    <div className="container text-center">

                   
                <div className="row">

                <div className="col-3">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="count">500</span>
                </div>

                <div className="col-9">
                    <a href="#">Shop location</a>
                    </div>

                </div>

                </div>


    </div>
                
                </div>
            
        
    )


} 

export default SingleItem