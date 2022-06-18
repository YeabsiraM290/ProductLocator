import './assets/css/singleItem.css'
import React, { Component }  from 'react';
import { Carousel } from "react-bootstrap"
const CommentView = (props) =>{
    var comment = props.comment
    var date = comment.date
    var rating = comment.rating
    var review = comment.review

    return(


   
                <div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>{comment.customer}</h4> <span>{date}</span> <br/>
                    <hr ></hr>
                    <p className='text-center mt-2'>{review}</p>
                    <small><p>Rating: {rating}</p></small>
                </div>
          


    )
} 

export default CommentView