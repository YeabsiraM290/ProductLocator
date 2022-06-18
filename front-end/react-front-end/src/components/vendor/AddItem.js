import React, { Component }  from 'react';
import "../assets/css/addItem.css";
import { useState, useEffect } from 'react';

const AddItem = () =>{

  const [av, setav] = useState(false);
  const [disc, setdisc] = useState(false);
  const [cate, setcate] = useState(false);
  const [size, setsize] = useState(false);
  const [image, setimage] = useState(false);

  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [discription, setdiscription] = useState('');
  const [cloth_size, setcloth_size] = useState('');
  const [item_image, setitem_image] = useState('');
  const [availability, setavailability] = useState('');
  const [category, setcategory] = useState('');

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
        url = `http://localhost:8000/api/food/`
    }
    else if (cat=="GAS STATION"){
      url = `http://localhost:8000/api/gas/`
    }
    else if (cat=="BOUTIQUE"){
      url = `http://localhost:8000/api/cloth/`
    }
    else if (cat=="HARDWARE STORE"){
      url = `http://localhost:8000/api/product/`
    }
    

      var data = {
        name:name,
        price:price
      }

      if (disc){
        data.discription = discription
      }

      if (size){
        data.size_aviliable = cloth_size
      }

      if (cate){
        data.category = category
      }

      if (av){
        data.availability = availability
      }


      console.log(JSON.stringify(data))


      async function add (e) {
        let response = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
            body: JSON.stringify(data)
           })

           if (response.status==500){
            let respons = await fetch('http://localhost:8000/api/transaction/', {
              method: 'POSt',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` },
                body:JSON.stringify({
                 date:new Date().toISOString().split('T')[0],
                 amount:50,
                })
               })
               add()
               
           }
           window.location.reload()

   
      }

    
 

useEffect(() => {
  if (cat =="RESTURANT"){
    setimage(true)
    setdisc(true)
    setcate(true)
}
else if (cat=="GAS STATION"){
  setav(true)

}
else if (cat=="BOUTIQUE"){
  setdisc(true)
  setsize(true)
  setimage(true)
}
else if (cat=="HARDWARE STORE"){
  setdisc(true)
  setimage(true)
}

})

  return(

    <div className="container text-center addItem-container ">

      <p className="text-center addItem-title"> Add new item </p>
        
      <form>

        <div className="row mt-5">

          <div className="col-3">
            <label for="shop_img">Name</label>
          </div>

          <div className="col-9">
            <input type="text" name="name" value={name} onChange={handlename} id="name" className="form-control" />
          </div>

        </div>

        <div className="row mt-4">

          <div className="col-3">
            <label for="shop_img">Price</label>
          </div>

          <div className="col-9">
            <input type="number" name="name" value={price} onChange={handelprice} id="name" className="form-control" />
          </div>

        </div>

   {disc &&      <div className="row mt-4 mb-2">

<div className="col-3">
  <label for="shop_img">Discription</label>
</div>

<div className="col-9">
<textarea type="text" value={discription} onChange={handeldisc} id="form2Example1" placeholder="Discription" className="form-control" />
</div>

</div>}

     {image &&    <div className="form-outline mb-4 mt-4">

<div className="row">

  <div className="col-3">
  <label for="shop_img">Item image</label>
  </div>

  <div className="col-9">
  <input type="file" name="shop_img" id="form2Example1" className="form-control" />
  </div>

</div>

</div>}

{size && 

<div className="row mt-5 mb-2">

<div className="col-3">
  <label for="shop_img">Size</label>
</div>

<div className="col-9">
  <input type="text" name="name" value={cloth_size} onChange={handelsize} id="name" className="form-control" />
</div>

</div>}

{cate && 
        <div className="row mt-5 mb-2">

          <div className="col-3">
            <label for="shop_img">Category</label>
          </div>

          <div className="col-9">
          <select class="form-select"   value={category} onChange={handelcat}   aria-label="Default select example">

<option value ="PIZZA">Pizza</option>
<option value="BEVERAGE">Beverage</option>


</select>
          
          </div>

        </div>}

        {av && 
        <div className="row mt-5 mb-2">

          <div className="col-3">
            <label for="shop_img">Aviliblity</label>
          </div>

          <div className="col-9">
          <select class="form-select"  value={availability} onChange={handelavi}   aria-label="Default select example">

<option value ="AVAILABLE">Available</option>
<option value="NOT AVAILABLE">Not Available</option>


</select>
           
          </div>

        </div>}

        <button type="button" onClick={add} className="login-btn btn btn-primary btn-block mb-4">Add</button>

      </form>

    </div>

  
  );
};

export default AddItem; 
