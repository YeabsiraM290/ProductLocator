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
import location from './icons/location.png'



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

  var MyiconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: location,
    }),
  });

  var count = 0;
  let features = lonLatArray.map((item) => {
    let feature = new Feature({
      geometry: new Point(fromLonLat(item)),
    });
    if(cat[count]==='GAS STATION'){
      feature.setStyle(GasiconStyle);
     
    }
    else if(cat[count]==='RESTURANT'){
      feature.setStyle(FoodiconStyle);
    }
    else if(cat[count]==='BOUTIQUE'){
      feature.setStyle(ClothiconStyle);
    }
    else if(cat[count]==="HARDWARE STORE"){
      feature.setStyle(HardwareiconStyle);
    }
    else{
      feature.setStyle(MyiconStyle);
      
    }
 
    count+=1

    return feature;
  });
  
  return features;
}

getLocation()
function getLocation(){
  if (navigator.geolocation){
    
      navigator.geolocation.getCurrentPosition(showPosition,showError);
  }
  else{
   console.log('no location')
     
  }
}
function showError(){
  console.log('error')
}



function showPosition(position){
  const lat=position.coords.latitude;
  const long=position.coords.longitude;
  setlocation(lat, long)
}

var positions = []

function setlocation(lat, long){
positions[0] = Number((lat).toFixed(1))
positions[1] = Number((long).toFixed(1))
}



const Maprender = (props) => {

    const [center, setCenter] = useState(mapConfig.center);
    const [zoom, setZoom] = useState(9);
    // const [features, setfeatures] = useState(props.features)

    var LonLat = [[positions[0], positions[1]]]

props.features.forEach(data => {

  LonLat.push([data['more']['location_latitude'], data['more']['location_longitude']])
  
});





var cat = ['my']

props.features.forEach(data => {

    cat.push(data.more['category'])
  
});
console.log(cat)

var features = addMarkers(LonLat, cat)


console.log(features)

  return (

    <div>

      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />

        <VectorLayer source={vector({ features })} />
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>

      <hr />
    
    </div> 
  );
};

export default Maprender;
