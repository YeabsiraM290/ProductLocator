import React, { Component }  from 'react';
import './assets/css/homeItem.css'
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Adview = (props) => {
    let history = useNavigate();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    
    useEffect(() => {
        setName(props.item.shop_name);
        setImage(props.item.more.shop_image)
       
      }, []);

      const handleToshop = (e) =>{
        var item_info = [props.item.id]
        
        history( '/shop_view',{state: {detail:item_info}} )
    }


    return (

        <div className="home-product">
            
            <div className="home-product-img">
                <img src={'http://localhost:8000'.concat(image)} />
            </div>

            <div className="home-product-text">
                <p className='text-center'><small>{props.item.more.shop_name}</small></p>
                <div className="toshop">
                    <span onClick={handleToshop}><small onClick={handleToshop}>Got to shop</small></span>
                </div>

                <div className="home-product-title">
                    <h3>{name}</h3>
                </div>
          

            </div>

        </div>  
    )
}

export default Adview