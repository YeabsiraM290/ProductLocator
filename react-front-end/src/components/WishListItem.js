import React, { Component }  from 'react';
const WishListItem = () => {

    return(

        <tr>

            <td data-th="Product">

                <div className="row wish-list-item-info">

                    <div className="col-md-3 text-left">
                        <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=christian-wiediger-KV2vFOYItcY-unsplash.jpg" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                    </div>

                    <div className="col-md-7 mt-sm-2">

                        <div className="row">

                            <div className="col-10">

                            <h4>Product Name</h4>

                                <p className='single-item-disc'>
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

                                <p className="single-item-disc"><b>Price:</b>  2000 birr</p>

                            </div>

                            <div className="col-2">

                                <div className="text-right">

                                    <button className="wish-list-btns btn btn-white border-secondary bg-white btn-md mb-2">
                                        <i className="fa fa-share "></i>
                                    </button>
                                    <button className="wish-list-btns btn btn-white border-secondary bg-white btn-md mb-2">
                                        <i className="fa fa-trash"></i>
                                    </button>

                                </div>
                            </div>  

                        </div>

                    </div>

                </div>

            </td>

        </tr>
    )
}

export default WishListItem