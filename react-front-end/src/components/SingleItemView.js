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