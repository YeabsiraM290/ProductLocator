import './assets/css/searchResult.css'
import Results from './Results'
import React, { Component }  from 'react';

const SearchResult = () => {

    return(
      <div className="row mt-3 item-control">



      <div className="col-3">



<div className="card filter">
<article className="card-group-item">
<header className="card-header">
<h6 className="title">Range input </h6>
</header>
<div className="filter-content">
<div className="card-body">
<div className="form-row">
<div className="form-group col-md-6">
  <label>Min</label>
  <input type="number" className="form-control" id="inputEmail4" placeholder="$0" />
</div>
<div className="form-group col-md-6 text-right">
  <label>Max</label>
  <input type="number" className="form-control" placeholder="$1,0000" />
</div>
</div>
</div>
</div>
</article>
<article className="card-group-item">
<header className="card-header">
<h6 className="title">Selection </h6>
</header>
<div className="filter-content">
<div className="card-body">
  <div className="custom-control custom-checkbox">
  
      <input type="checkbox" className="custom-control-input" id="Check1" />
      <label className="custom-control-label" for="Check1">Filters</label>
  </div>

  <div className="custom-control custom-checkbox">
   
      <input type="checkbox" className="custom-control-input" id="Check2" />
     <label className="custom-control-label" for="Check2">Filters</label>
  </div>

  <div className="custom-control custom-checkbox">

      <input type="checkbox" className="custom-control-input" id="Check3" />
      <label className="custom-control-label" for="Check3">Filters</label>
  </div>

  <div className="custom-control custom-checkbox">

      <input type="checkbox" className="custom-control-input" id="Check4" />
      <label className="custom-control-label" for="Check4">Filters</label>
  </div>
</div>
</div>
</article>
</div>
          </div>
      <div className="col-9 mb-5">
      <div className="cart_section">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cart_container">
                    <div className="cart_title">Results....</div>
           
                      {Results()}
                      {Results()}
                      {Results()}
                      {Results()}
                      {Results()}
                    
                </div>
            </div>
        </div>
    </div>
</div>

          </div>

  </div>
    )

}

export default SearchResult