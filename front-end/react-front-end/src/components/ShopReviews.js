import ItemCard from './ItemCard'
import './assets/css/shopView.css'
import { useState, useEffect } from 'react';
import React, { Component }  from 'react';
import CommentView from './CommentView';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ShopReviews = () => {
  let history = useNavigate();
    const [comments, setComments] = useState([]);
    const [rating, setrating] = useState(1);
    const [comment, setcomment] = useState('');

    const {state} = useLocation();

    const id =state.detail[0]
    useEffect(() => {
        send_data();
      }, []);
    

    async function get_data() {

        let response = await fetch(`http://localhost:8000/api/shop/${id}/`, {
         method: 'GET',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
          })
    
        let data = await response.json();
        return data
    }

    async  function handleaddcommment (e) {

      try{
        let response = await fetch('http://localhost:8000/api/review_shop/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` ,
        },   body: JSON.stringify({
          shop:id,
         date:new Date().toISOString().split('T')[0],
         rating:rating,
         review:comment,
       })
           })
     
         let data = await response.json();
      }
    
      catch{
        console.log("error")
      }
    
    }

    function send_data() {

        try{
          get_data().then(function(data){
      
            setComments(data.feedbacks)
           
          
           }) .catch(function(err) {
            console.log(err)
        });
           
        }
        catch (error) {
         console.log(error);
       }
      }
      var commentResults = []

      comments.forEach(data => {
       
            commentResults.push(<CommentView comment={data}/>)
        
        
        
      });
      const handelShopview = (e) =>{
        var item_info = [id ]
        history( '/shop_view',{state: {detail:item_info}} )
      }

      const handlereview = (e) => {
        setcomment(e.target.value);
       
        };
      
      const handlerating = (e) => {
        setrating(e.target.value);
        
        };

    return(

        <div className='shop_view_items'>
                              <div className="row vendor-menu text-center">

<div className="col mt-3"><a className='vendor-menu-items' onClick={handelShopview}>Products</a></div>
<div className="col mt-3"><a className='vendor-menu-items' href='/shop_review'>Reviews</a></div>

</div>
            

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
    
    )
}

export default ShopReviews