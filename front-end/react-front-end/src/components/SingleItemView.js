import './assets/css/singleItem.css'
import React, { Component }  from 'react';
import { Carousel } from "react-bootstrap"
const SingleItem = () =>{

    return(

      <div className='mb-5'>

        <div className='single-item-top'>

          <div className="row mt-5">

            <div className="col-6 slide-show">

              <Carousel>
                
                <Carousel.Item>
                  <img
                    className=" img-fluid slides"
                    src="https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=onur-binay-auf3GwpVaOM-unsplash.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="img-fluid slides"
                    src="https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=onur-binay-auf3GwpVaOM-unsplash.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="img-fluid slides"
                    src="https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=onur-binay-auf3GwpVaOM-unsplash.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>

              </Carousel>
                
                </div>

            <div className="col-5 single-item-discription mt-1">
          
              <div className="container text-center">

                <div className="row">
                    <p className='single-item-name text-center'>Item name
                        <spna><button className='single-item-cart-btn'>
                          <i className="fa fa-shopping-cart"></i></button>
                        </spna>
                    </p>
                    
                </div>

                <div className="row">

                    <p className='single-item-disc text-center'>
                      It is a long established fact that a reader will be distracted 
                      by the readable content of a page when looking at its layout. The 
                      point of using Lorem Ipsum is that it has a more-or-less normal 
                      distribution of letters, as opposed to using 'Content here, content 
                      here', making it look like readable English. Many desktop publishing
                       packages and web page editors now use Lorem Ipsum as their default model 
                       text, and a search for 'lorem ipsum' will uncover many web sites still in 
                       their infancy. Various versions have evolved over the years, sometimes by 
                       accident, sometimes on purpose (injected humour and the like).
                    </p>          
                 
                </div>

                <div className="row">

                  <div className='col-6'>
                    <p className='single-item-price'>2000 birr</p>
                  </div>

                  <div className="col-6">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="single-item-rate-count"> 500</span>
                  </div>

                </div>

                <div className='row tetx-center mt-4'>
                  <button className='btn btn-primary'>Go to shop</button>
                </div>

              </div>

            </div>
            
          </div>

        </div> 

        <section className='mt-5'>

          <div className="container comment-con">

            <div className="row">

              <div className="col-sm-5 col-md-6 col-12 pb-4">

                <h1>Comments</h1>

                <div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>

                <div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>

                <div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>

                <div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>

              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">

                <form className='comment-form' id="algin-form">

                    <div className="form-group">
                        <h4>Leave a comment</h4> <label className='comment-label' for="message">Message</label> <textarea name="msg" id="" msg cols="30" rows="5" className="form-control"></textarea>
                    </div>

                    <div className="form-group"> <label className='comment-label'  for="name">Name</label> <input type="text" name="name" id="fullname" className="form-control comment-input"/> </div>
                    
                    <div className="form-group"> <label className='comment-label'  for="email">Email</label> <input type="text" name="email" id="email" className="form-control comment-input"/> </div>

                    <div className="form-group"> <button type="button" className="post">Post Comment</button> </div>
                
                </form>

              </div>

            </div>

        </div>

      </section>
                
  </div>
    )
} 

export default SingleItem