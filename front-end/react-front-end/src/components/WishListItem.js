import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
const WishListItem = (props) => {

    const [name, setName] = useState('');
    const [image, setimage] = useState('')
    const [id, setId] = useState('')
    const [price, setPrice] = useState('')
    const [username, setUsername] = useState('')
    const [share, setShare] = useState(false)

    useEffect(() => {
        setName(props.item.name);
        setimage(props.item.image);
        setId(props.item.id)
        setPrice(props.item.price)
      }, []);

      const handleUsername = (e) => {

          setUsername(e.target.value)
      }

      const handleShare = (e) => {

        setShare(!share)
    }


      async function send (e) {
        let response = await fetch('http://localhost:8000/api/notification/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
            body: JSON.stringify({
                item: id,
                username: username,
            })
           })

           setShare(false)
   
        
      }
    
    return(

        <tr>

            <td data-th="Product">

                <div className="row wish-list-item-info">

                    <div className="col-md-3 text-left">
                        <img src={image} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                    </div>

                    <div className="col-md-7 mt-sm-2">

                        <div className="row">

                            <div className="col-10">

                            <h4>{name}</h4>


                                <p className="single-item-disc"><b>Price:</b>  {price} birr</p>

                            </div>

                            <div className="col-2">

                                <div className="text-right">

                                   {!share && <button className="wish-list-btns btn btn-white border-secondary bg-white btn-md mb-2" onClick={handleShare}>
                                        <i className="fa fa-share ">Share</i> 
                                    </button>}
                                    {share && <div><p className='username-lable'>Username:</p> <input type="text" id="username"  onChange={handleUsername} value={username} className="form-control username" /> </div>}

                                    {/* <button className="wish-list-btns btn btn-white border-secondary bg-white btn-md mb-2">
                                        <i className="fa fa-trash"></i>
                                    </button> */}
                                     {share && <button className="wish-list-btns btn btn-white border-secondary bg-white btn-md mb-2" onClick={send}>
                                        <i className="fa fa-share ">Share</i> 
                                    </button>}

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