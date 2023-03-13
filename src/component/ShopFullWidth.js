import React from 'react'
import "./ShopFullWidth.css";
import Bestseller from "./Bestseller";
import Addpic from './Addpic';
import Recommended from './Recommended';
import Footer from './Footer';
function ShopFullWidth() {
  return (
    <div>
    <div className="container">
	   <div className="column">
	     <h2> Sort out your spring look </h2>
		 <p> This is first column of our grid system</p>
     <button className="Shop">Shop</button>
     <div className="column1">
<h1> Hi </h1>
	   </div>
	   </div>
     </div>
     <Bestseller/>
     <Bestseller/>
     <Bestseller/>
    <Addpic/>
    <Recommended/>
    <Footer/>
    </div>
  )
}

export default ShopFullWidth
