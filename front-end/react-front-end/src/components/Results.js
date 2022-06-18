import React, { Component, useEffect }  from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Results = (props) => {
    const [name, setName] = useState('');
    const [food, setfood] = useState(false)
    const [shop, setshop] = useState(false)
    const [cloth, setcloth] = useState(false)
    const [hardware, sethardware] = useState(false)
    const [gas, setgas] = useState(false)
    var cat = props.cat

useEffect(()=>{
    if(cat=='shop'){
        setshop(true)
    }

    else if(cat=='food'){
        setfood(true)
    }
    else if(cat=='gas'){
        setgas(true)
    }
    else if(cat=='cloth'){
        setcloth(true)
    }
    else if(cat=='hardware'){
        sethardware(true)
    }
})
    
    useEffect(() => {
        setName(props.itemName);
      }, []);

      let history = useNavigate();

       function handleItem (e) {

        var cate =  e.target.getAttribute('data-arg')
        var item_id = props.item.id
        var item_info = [item_id, cate]
        history( '/item_view',{state: {detail:item_info}} )
              
            }

            function handleShop (e) {

                history( '/shop_view',{state: {detail:[props.item.id]}} )
                      
                    }

    return(

        <div className="cart_items">
        <ul className="cart_list">
            <li className="cart_item clearfix">
                {props.item.image && <div className="cart_item_image"><img src={'http://localhost:8000'.concat(props.item.image)}alt=""/></div>}
                {shop && <div className="cart_item_image"><img src={'http://localhost:8000'.concat(props.item.more.shop_image)} alt=""/></div>}
                <div className="cart_item_info justify-content-between">
                    <div className="cart_item_name cart_info_col">
                        <div className="cart_item_title">name</div>
                        <div className="mb-5">{name} {!shop && <p className='mt-2'>Price: {props.item.price} <small>birr</small></p>}</div>
                        
                    </div>

                    
                
             
            
                </div>
                {food &&  <div className="toshop text-center mt-5">
                    <button className='btn btn-primary mt-5' onClick={handleItem} data-arg ="RESTURANT">View more</button>
                </div>}

                {cloth &&  <div className="toshop text-center mt-5">
                    <button className='btn btn-primary mt-5' onClick={handleItem} data-arg ="BOUTIQUE">View more</button>
                </div>}

                {hardware &&  <div className="toshop text-center mt-5">
                    <button className='btn btn-primary mt-5' onClick={handleItem} data-arg ="HARDWARE STORE">View more</button>
                </div>}

                {gas &&  <div className="toshop text-center mt-5">
                    <button className='btn btn-primary' onClick={handleItem} data-arg ="GAS STATION">View more</button>
                </div>}

                {shop &&   <div className="toshop text-center mt-5">
                    <button className='btn btn-primary mt-5' onClick={handleShop}>Go to shop</button>
                </div>}
            </li>
        </ul>
    </div>
    )
}       

export default Results