import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer';
import Signup from './components/customer/Signup';
import Navigation from './components/Navigation'
import Home from './components/Home'
import VendorProfile from './components/vendor/VendorProfile'
import StepOne from './components/vendor/vendor-registration/VendorInformation'
import StepTwo from './components/vendor/vendor-registration/ShopInformation'
import Final from './components/vendor/vendor-registration/SelectPlan'
import UserProfile from './components/customer/UserProfile'
import Map from './components/Map'
import ForgetPass from './components/ForgetPassword';
import ShopView from './components/ShopView';
import SingleItem from './components/SingleItemView';
import SearchResult from './components/SearchResult';
import AddItem from './components/vendor/AddItem';
import VendorItemControl from './components/vendor/VendorItemProfile';
import WishList from './components/WishList'
import VendorMenu from './components/VendorMenu';

const routing = (
	<Router>
		<React.StrictMode>

			<Routes>
				<Route path="/" element={[<Navigation/>,<Home/>]}/>
        <Route path="/login" element={[<Header/>,<Login/>] }/>
        <Route path="/signup" element={[<Header/>,<Signup/>] }/>
        <Route path="/home" element={[<Navigation/>, <Home/>] }/>
        <Route path="/vendor_profile" element={[<Navigation/>,<VendorMenu/>,<VendorProfile/>] }/>
        <Route path="/vendor_signup_1" element={[<Header/>, <StepOne/>] }/>
        <Route path="/vendor_signup_2" element={[<Header/>, <StepTwo/>] }/>
        <Route path="/vendor_signup_3" element={[<Header/>, <Final/>] }/>
        <Route path="/forget_password" element={[<Header/>, <ForgetPass/>] }/>
        <Route path="/profile" element={[<Navigation/>, <UserProfile/>] }/>
        <Route path="/shop_view" element={[<Navigation/>, <ShopView/>] }/>
        <Route path="/map" element={[<Navigation/>, <Map/>] }/>
        <Route path="/search_result" element={[<Navigation/>, <SearchResult/>] }/>
        <Route path="/item_view" element={[<Navigation/>, <SingleItem/>] }/>
        <Route path="/add_item" element={[<Navigation/>,<VendorMenu/>, <AddItem/>] }/>
        <Route path="/wish_list" element={[<Navigation/>, <WishList/>] }/>
        <Route path="/item_control" element={[<Navigation/>,<VendorMenu/>, <VendorItemControl/>] }/>
			</Routes>
      <Footer/>

		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

