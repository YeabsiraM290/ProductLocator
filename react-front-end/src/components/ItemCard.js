const ItemCard = () => {


    return(

        <div className="wrapper">

<div className="overviewInfo">
    
    <div className="productimg-con">
      <img className="productImage" src="https://images.unsplash.com/photo-1585102664582-d3f574466cf5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=axel-mencia-ce43DT3n3ko-unsplash.jpg" alt="product: ps5 controller image"/>
    </div>
    

   
</div> 


<div className="productSpecifications">
    <div className="row">
        <div className="col-9"><h2 className="item-name"> Dual Sense </h2></div>
        <div className="col-3">  
        <div className="actions mt-1">

    <div className="cartbutton neurobutton"> 
<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
  fill="currentColor"
/>
<path
  d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
  fill="currentColor"
/>
<path
  d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
  fill="currentColor"
/>
</svg>
    </div>
  </div>
  </div>
        </div>
  
  <p className="item-discription"> DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset... </p>
  <div className="priceTag text-center">
      <span>5000</span>birr
    </div>

</div>


</div>
    )
}

export default ItemCard