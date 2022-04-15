import { useNavigate } from 'react-router-dom';
import './assets/css/horizontalCard.css'

const ItemHorizonatlCard = () => {

    const history = useNavigate();

    const itemview = (e) => {

        e.preventDefault();
        history('/item_view');
    };

    return(
        
        <div>

            <div className="horizontal-item-con">	
	
	            <div className="horizontal-product-details">
		
	                <h1>Mechanical Keyboard</h1>

                    <p class="item-discription">" Let's spread the joy , here is Christmas , .....</p>
   
                    <div className="row">

                        <div className="col">

                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>

                        </div>

                        <div className="col"> 
                            <p className="price text-center">$250</p>
                        </div>

                    </div>
		
	                <button className="btn btn-primary" onClick={itemview}>View more</button>
	
                </div>
	
                <div className="horizontal-product-image">
	
	                <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-WkfDrhxDMC8-unsplash.jpg" alt=""/>
	
                </div>

            </div>
            
        </div>
    )
}

export default ItemHorizonatlCard