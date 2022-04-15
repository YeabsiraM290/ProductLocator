const Results = () => {

    return(

        <div className="cart_items">
        <ul className="cart_list">
            <li className="cart_item clearfix">
                <div className="cart_item_image"><img src="https://i.imgur.com/qqBRWD5.jpg" alt=""/></div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div className="cart_item_name cart_info_col">
                        <div className="cart_item_title">Name</div>
                        <div className="cart_item_text">Samsung C7</div>
                    </div>
                    <div className="cart_item_color cart_info_col">
                        <div className="cart_item_title">Price</div>
                        <div className="cart_item_text"><span ></span>2000 birr</div>
                    </div>
             
            
                    <div className="cart_item_total cart_info_col">
                        <div className="cart_item_title">Shop</div>
                        <div className="cart_item_text"><a>---</a></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    )
}       

export default Results