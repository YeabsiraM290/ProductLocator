import './assets/css/vendorMenu.css'
import React, { Component }  from 'react';

const ShopMenu = () => {

    return(

        <div className="row vendor-menu text-center">

            <div className="col mt-3"><a className='vendor-menu-items' href='/shop_view'>Products</a></div>
            <div className="col mt-3"><a className='vendor-menu-items' href='/shop_review'>Reviews</a></div>

        </div>
    )

}

export default ShopMenu