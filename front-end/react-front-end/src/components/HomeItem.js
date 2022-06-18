import React, { Component }  from 'react';
import './assets/css/homeItem.css'
import { useNavigate } from 'react-router-dom';

const HomeItem = (props) => {
    let history = useNavigate();
    var item = props.item
    var id = item.id
    var cat = ''

    if (item.category){
       cat = "RESTURANT"
    }
    else if (item.availability){
     cat ="GAS STATION"
    }
    else if (item.size_aviliable){
      cat = "BOUTIQUE"
    }
    else{
      cat = "HARDWARE STORE"
    }

    const handleViewmore = (e) =>{
        var item_info = [id,cat ]
        history( '/item_view',{state: {detail:item_info}} )
    }

    return (
        <div className="col-4">
        <div className="home-product">
            {item.image &&      <div className="home-product-img">
                <img src= {'http://localhost:8000'.concat(item.image)} alt="Product" className="img-responsive" height={200}  />
            </div>}
       

            <div className="home-product-text">

                <div className="toshop">
                    <span onClick={handleViewmore}>View more</span>
                </div>

                <div className="home-product-title">
                    <h3>{item.name}</h3>
                </div>
                {item.discription && 
                <div className="home-product-description p-1">
                    <p>{item.discription}</p>
                </div> }

                <div className="row">

                    <div className="home-product-price text-center col-9"><b>{item.price}</b> birr </div>

                    

                </div>
          

            </div>

        </div>  
        </div>
    )
}

export default HomeItem