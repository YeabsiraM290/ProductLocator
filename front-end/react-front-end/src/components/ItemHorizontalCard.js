import { useNavigate } from 'react-router-dom';
import './assets/css/horizontalCard.css'
import React, { Component }  from 'react';
import { useState, useEffect } from 'react';

const ItemHorizonatlCard = (props) => {
    var item = props.item

    const history = useNavigate();
    const [edit, setedit] = useState(false);

    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [discription, setdiscription] = useState('');
    const [cloth_size, setcloth_size] = useState('');
    const [item_image, setitem_image] = useState('');
    const [availability, setavailability] = useState('');
    const [category, setcategory] = useState('');

    useEffect(() => {
      setname(item.name)
      setprice(item.price)
      setdiscription(item.discription)
      setcloth_size(item.size_aviliable)
      setavailability(item.availability)
      setcategory(item.setcategory)
    }, []);

    const handlename = (e) => {
      setname(e.target.value);
      
      };
    
      const handelprice = (e) => {
        setprice(e.target.value);
       
        };
  
  const handeldisc = (e) => {
      setdiscription(e.target.value);
   
      };
  
  const handelsize = (e) => {
      setcloth_size(e.target.value);
      
      };
  
  const handelimage = (e) => {
      setitem_image(e.target.value);
     
      };
  
  const handelavi = (e) => {
      setavailability(e.target.value);
   
      };
  
      const handelcat = (e) => {
        setcategory(e.target.value);
        
        };

        var cat = sessionStorage.getItem('cat')

        var url =''
      
        var data = {}
      
        if (cat=="RESTURANT"){
          url = `http://localhost:8000/api/food/${props.item.id}/`
      }
      else if (cat=="GAS STATION"){
        url = `http://localhost:8000/api/gas/${props.item.id}/`
      }
      else if (cat=="BOUTIQUE"){
        url = `http://localhost:8000/api/cloth/${props.item.id}/`
      }
      else if (cat=="HARDWARE STORE"){
        url = `http://localhost:8000/api/product/${props.item.id}/`
      }

      var data = {
        name:name,
        price:price
      }

      if (discription){
        data.discription = discription
      }

      if (cloth_size){
        data.size_aviliable = cloth_size
      }

      if (category){
        data.category = category
      }

      if (availability){
        data.availability = availability
      }
      async function add (e) {
        setedit(false)
        let response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
            body: JSON.stringify(data)
           })
           window.location.reload();
      }

      async function del (e) {
        setedit(false)
        let response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
         
           })
           window.location.reload();
      }

    const itemview = (e) => {

        e.preventDefault();
        history('/item_view');
    };  

    const handelEdit = (e) =>{
        setedit(!edit)
      
   
     
    }


    return(
        
        <div>

            <div className="horizontal-item-con">	
	
	            <div className="horizontal-product-details">
		
	                <h1>{item.name}</h1>

                    {item.discription && <p class="item-discription">{item.discription }</p>}
   
                    <div className="row">

                  

                        {item.size_aviliable && <p class="item-discription">Size: {item.size_aviliable }</p>}
                        {item.availability && <p class="item-discription">Aviliblity: {item.availability }</p>}
                        {item.category && <p class="item-discription">Category: {item.category }</p>}

                        <div className="col"> 
                            <p className="price text-center">{item.price} birr</p>
                        </div>

                    </div>
		
	                <button className="btn btn-primary" onClick={handelEdit}>Edit</button>
	
                </div>
	
                <div className="horizontal-product-image">
	
	                <img src={item.image} alt=""/>
	
                </div>

            </div>

            {edit &&      <div className="col-7 item-control-con">

<div className="container text-center">

  <p className="text-center item-control-titles mt-2"> Item information </p>

  <form>

    <div className="form-outline mb-4">

      <div className="row">

        <div className="col-3">
          <label for="shop_img">Item name</label>
        </div>

        <div className="col-9">

          <div className="form-outline mb-4">
              {!edit && <input disabled type="text" id="form2Example1" value={name}  className="form-control" />}
              {edit && <input  type="text" id="form2Example1" value={name} onChange={handlename} className="form-control" />}
          </div>

        </div>

      </div>

    </div>
    { item.discription &&

    <div className="form-outline mb-4">

      <div className="row">
      <div className="col-3">
          <label for="shop_img">Discription</label>
        </div>
   

        <div className="col-9">

          <div className="form-outline mb-4">
           {!edit && <textarea type="text" disabled className="shop-prof-desc form-control" id="form2Example1" placeholder="username" value={discription} />}
           {edit && <textarea type="text" className="shop-prof-desc form-control" id="form2Example1" onChange={handeldisc} placeholder="username" value={discription} />}
          </div>

        </div>

      </div>

    </div> }

    { item.category &&

<div className="form-outline mb-4">

  <div className="row">
  <div className="col-3">
      <label for="shop_img">Category</label>
    </div>


    <div className="col-9">

      <div className="form-outline mb-4">
      <select class="form-select"   value={category} onChange={handelcat}   aria-label="Default select example">

<option value ="PIZZA">Pizza</option>
<option value="BEVERAGE">Beverage</option>


</select>
      </div>

    </div>

  </div>

</div> }


{ item.availability &&

<div className="form-outline mb-4">

  <div className="row">
  <div className="col-3">
      <label for="shop_img">Aviliblity</label>
    </div>


    <div className="col-9">

      <div className="form-outline mb-4">
      <select class="form-select"  value={availability} onChange={handelavi}   aria-label="Default select example">

<option value ="AVAILABLE">Available</option>
<option value="NOT AVAILABLE">Not Available</option>


</select>
      </div>

    </div>

  </div>

</div> }

    <div className="form-outline mb-4">

      <div className="row">

        <div className="col-3">
          <label for="shop_img">Price</label>
        </div>

        <div className="col-9">

          <div className="form-outline mb-4">
            {!edit && <input type="number" disabled id="form2Example1" placeholder="Price" value={price} className="form-control" />}
            {edit && <input type="number" id="form2Example1" placeholder="Price" onChange={handelprice} value={price} className="form-control" />}
          </div>

        </div>

      </div>

  </div>

{item.image &&   <div className="form-outline mb-4">

<div className="row">

  <div className="col-3">
    <label for="shop_img">Item image</label>
  </div>

  <div className="col-9 img-view">
    <img className="item-control-imgs"  src={item.image} alt="First slide" width="200px" height="100px" />

  </div>

</div>

</div>}

<button type="button" onClick={add} className="edit-btn btn btn-primary btn-block mt-4 mb-5">save</button>

<br/>

<a type="button" onClick={del} className="del-account mb-5">Delete item</a>

</form>

</div>

</div>}
            
        </div>
    )
}

export default ItemHorizonatlCard