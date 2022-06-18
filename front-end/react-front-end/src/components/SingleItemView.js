import './assets/css/singleItem.css'
import React, { Component }  from 'react';
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from 'react';
import CommentView from './CommentView';
import { useLocation } from "react-router-dom";

const SingleItem = (props) =>{

  const {state} = useLocation();

  const cat =state.detail[1]
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [availability, setavailability] = useState('');
  const [discription, setdiscription] = useState('');
  const [size, setsize] = useState('');
  const [category, setcategory] = useState('');
  const [image, setimage] = useState('');
  const [comments, setComments] = useState([])
  const [error, setError] = useState(false);
  const [errorMessage, setError_message] = useState('')

  const [rating, setrating] = useState(1);
  const [comment, setcomment] = useState('');

  const id = state.detail[0]
  var gas = false

  useEffect(() => {
      send_data();
    }, []);

  var url =''
  var wish_url = ''
  var comment_url = ''

  if (cat=="RESTURANT"){
    url = `http://localhost:8000/api/food/${id}/`
    wish_url=  'http://localhost:8000/api/food_wishlist/'
    comment_url=  'http://localhost:8000/api/review_food/'
}
else if (cat=="GAS STATION"){
  url = `http://localhost:8000/api/gas/${id}/`
  wish_url=  'http://localhost:8000/api/gas_wishlist/'
  gas = true
  
}
else if (cat=="BOUTIQUE"){
  url = `http://localhost:8000/api/cloth/${id}/`
  wish_url=  'http://localhost:8000/api/cloth_wishlist/'
  comment_url=  'http://localhost:8000/api/review_cloth/'
}
else if (cat=="HARDWARE STORE"){
  url = `http://localhost:8000/api/product/${id}/`
  wish_url=  'http://localhost:8000/api/product_wishlist/'
  comment_url=  'http://localhost:8000/api/review_product/'
}

  async function get_data() {

      let response = await fetch(url, {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
        })
  
      let data = await response.json();
      return data
  }

  async function handleAdd() {

    try{
      let response = await fetch(wish_url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` ,
      },   body: JSON.stringify({
       item_id:id
     })
         })
   
       let data = await response.json();
    }

    catch{
      setError(true)
              setError_message("Added to wish list")
    }
}

const handlereview = (e) => {
  setcomment(e.target.value);
 
  };

const handlerating = (e) => {
  setrating(e.target.value);
  
  };

async  function handleaddcommment (e) {

  try{
    let response = await fetch(comment_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` ,
    },   body: JSON.stringify({
     item:id,
     date:new Date().toISOString().split('T')[0],
     rating:rating,
     review:comment,
   })
       })
       window.location.reload();
     let data = await response.json();
  }

  catch{
    console.log("error")
  }

}

  function send_data() {

      try{
        get_data().then(function(data){
         
          setname(data.name)
          setprice(data.price)

          try{
            setComments(data.feedbacks)
          }

          catch{
            console.log()
          }
          

          if(data.image){
            setimage(data.image)
          }

          if(data.availability){
            setavailability(data.availability)
          }

          if(data.discription){
            setdiscription(data.discription)
          }

          if(data.size_aviliable){
            setsize(data.size_aviliable)
          }

          if(data.category){
            setcategory(data.category)
          }
         
        
         }) .catch(function(err) {
          console.log(err)
      });
         
      }
      catch (error) {
       console.log(error);
     }
    }


    var commentResults = []

if (comments){
  comments.forEach(data => {
     
    commentResults.push(<CommentView comment={data}/>)

});
}

    const showerrorMessage = () => {
      return (
      <div
      className="success"
      style={{
      display: error ? '' : 'none',
      }}>
      <h4 className='success-message'>{errorMessage} !!</h4>
      </div>
      );
      };

    return(

      <div className='mb-5'>

        <div className='single-item-top'>

          <div className="row mt-5">
          {image && 
            <div className="col-6 slide-show">

            
                  <img
                    className="slides"
                    src={image}
                    alt="Third slide"
                    height={900}
                  />
          
                
                </div>
}

            <div className="col-5 single-item-discription mt-1">
          
              <div className="container text-center">
              {showerrorMessage()}
                <div className="row">
                    <p className='single-item-name text-center'>{name}
                        <spna><button className='single-item-cart-btn'>
                          <i className="fa fa-shopping-cart"></i></button>
                        </spna>
                    </p>
                    
                </div>

                <div className="row">

                    <p className='single-item-disc text-center'>
                    {discription &&  <p className="item-discription mt-2">{discription} </p>}
                    </p>          
                 
                </div>

                <div className="row">

                  <div className='col-6'>
                 
  {availability &&  <p className="item-discription mt-1">Availability: {availability} </p>}
  {category &&  <p className="mt-2"><small>{category}</small> </p>}
  {size &&  <p className="item-discription mt-1">Size: {size} </p>}
  
                    <p className='single-item-price'>{price} birr</p>

                  </div>

                </div>

                <div className='row tetx-center mt-4 mb-5'>
                  <button className='btn btn-primary' onClick={handleAdd}>Add to wish list</button>
                </div>

              </div>

            </div>
            
          </div>

        </div> 

{!gas &&         <section className='mt-5'>

<div className='shop_view_items'>
    

    <div className="row">
    
    <div className="col-sm-5 col-md-6 col-12 pb-4">
    
      <h1>Comments</h1>
      <div className="container comment-con">
      {commentResults}  
    
    </div>
    
    </div>
    
    
    <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
    
    <form className='comment-form' id="algin-form">
    
        <div className="form-group">
            <h4>Leave a comment</h4> <label className='comment-label' for="message">Message</label>
             <textarea name="msg" id="" value={comment} onChange={handlereview} msg cols="30" rows="5" className="form-control"></textarea>
        </div>
    
        <div className="form-group"> <label className='comment-label'  for="name">Rating</label> 
        <input type="number" value={rating} onChange={handlerating} name="name" id="fullname" min="1" max="5" className="form-control comment-input"/> </div>
        
        <div className="form-group"> <button onClick={handleaddcommment} type="button" className="post">Post Comment</button> </div>
    
    </form>
    
    </div>
    </div>
    
    
            </div>

</section>}
                
  </div>
    )
} 

export default SingleItem