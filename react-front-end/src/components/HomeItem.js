import './assets/css/homeItem.css'

const HomeItem = () => {

    return (

        <div className="home-product">
            
            <div className="home-product-img">
                <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-KV2vFOYItcY-unsplash.jpg" alt="Product" className="img-responsive" />
            </div>

            <div className="home-product-text">

                <div className="toshop">
                    <span>Got to shop</span>
                </div>

                <div className="home-product-title">
                    <h3>Gaming computer</h3>
                </div>

                <div className="home-product-description">
                    <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>

                <div className="row mt-4">

                    <div className="home-product-price col-9">1000 birr</div>

                    <div className='col-3'><button className='home-item-cart-btn'><i class="fa fa-shopping-cart"></i></button></div> 

                </div>
          

            </div>

        </div>  
    )
}

export default HomeItem