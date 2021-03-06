import './assets/css/map.css'
import { useState, useEffect } from 'react';
import Map from "../Map";
import { Layers, TileLayer, VectorLayer } from "../Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "../Source";
import { fromLonLat, get } from "ol/proj";
import { Controls, FullScreenControl } from "../Controls";
import mapConfig from "./config.json";
import resturant_icon from './icons/restaurant.png'
import cloth from './icons/cloth.png'
import tool from './icons/tools.png'
import gas from './icons/gas.png'
import Maprender from './Maprender';

function addMarkers(lonLatArray, cat) {
  var FoodiconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: resturant_icon,
    }),
  });

  var GasiconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: gas,
    }),
  });

  var ClothiconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: cloth,
    }),
  });

  var HardwareiconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: tool,
    }),
  });

  var count = 0;
  let features = lonLatArray.map((item) => {
    let feature = new Feature({
      geometry: new Point(fromLonLat(item)),
      
    });
    if(cat[count]=='GAS STATION'){
      feature.setStyle(GasiconStyle);
    }
    else if(cat[count]=='RESTURANT'){
      feature.setStyle(FoodiconStyle);
    }
    else if(cat[count]=='BOUTIQUE '){
      feature.setStyle(ClothiconStyle);
    }
    else if(cat[count]=='HARDEWARE STORE'){
      feature.setStyle(HardwareiconStyle);
    }
 
    count+=1
    return feature;
  });
  
  return features;
}

const Maps = () => {

  const [shops, setShops] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    send_data();
  }, []);


  async function get_data() {

    let response = await fetch('http://localhost:8000/api/shop/', {
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` }
      })

    let data = await response.json();
    return data
}

function send_data() {

  try{
    get_data().then(function(data){

      setShops(data)

     }) .catch(function(err) {
      console.log(err)
  });
     
  }
  catch (error) {
   console.log(error);
 }
}


var LonLat = []

shops.forEach(data => {

  LonLat.push([data['more']['location_latitude'], data['more']['location_longitude']])
  
});





var cat = []

shops.forEach(data => {

    cat.push(data.more['category'])
  
  
  
});


  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(9);

  var features = addMarkers(LonLat, cat)

  useEffect(()=>{

    if(shops.length >1){
      setloading(true)
    }

  })

  return (
    <div>
      {loading &&  <div>
   <Maprender features={shops}/>
 </div>}

 </div>
  );
};

export default Maps;
