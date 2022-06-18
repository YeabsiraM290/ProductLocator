import React, { Component }  from 'react';
import './assets/css/homeItem.css'
import { useNavigate } from 'react-router-dom';
const ItemCard = (prop) => {

  let history = useNavigate();

  var product = prop.item

  const handleViewmore = (e) =>{
    var item_info = [product.id,prop.cat ]
    history( '/item_view',{state: {detail:item_info}} )
}
    return(

        <div className="wrapper">

<div className="overviewInfo">
    
    <div className="productimg-con">
    {product.image &&   <img className="productImage" src={product.image}/>}
     
    </div>
    

   
</div> 


<div className="productSpecifications">
    <div className="row">
        <div className="col-9"><h4 className="item-name text-center mt-2"> {product.name}</h4></div>
       
        <div className="col-3">  
        <div className="actions mt-1">

 
  </div>
  </div>
        </div>
  {product.discription &&  <p className="item-discription mt-2">{product.discription} </p>}
  {product.availability &&  <p className="item-discription mt-1"><b>Availability</b>: {product.availability} </p>}
  {product.category &&  <p className="item-discription mt-2"><small>{product.category}</small> </p>}
  {product.size_aviliable &&  <p className="item-discription mt-1"><b>Size</b>: {product.size_aviliable} </p>}
  
  <div className="priceTag text-center">
      <span>{product.price}</span><b>birr</b>
    </div>

    <div className="toshop text-center mt-2">
                    <button className='btn btn-primary' onClick={handleViewmore}>View more</button>
                </div>

</div>


</div>
    )
}

export default ItemCard