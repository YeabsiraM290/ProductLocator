import ItemCard from './ItemCard'
import './assets/css/shopView.css'
import React, { Component }  from 'react';

const ShopView = () => {

    return(

        <div className='shop_view_items'>
            <p className='text-center shop-name mt-5 mb-4'>Shop name</p>
               <div className='row mb-5 mt-2 no-gutter'>

<div className='col-md'>{ItemCard()}</div>
<div className='col-md'>{ItemCard()}</div>
<div className='col-md'>{ItemCard()}</div>
<div className='col-md'>{ItemCard()}</div>
<div className='col-md'>{ItemCard()}</div>
</div>
<div className='row mb-5'>

<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
</div>

<div className='row mb-5'>

<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
<div className='col'>{ItemCard()}</div>
</div>
        </div>
    
    )
}

export default ShopView