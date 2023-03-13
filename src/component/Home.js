import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Addpic from "./Addpic";
import Bestseller from "./Bestseller";
import Footer from "./Footer";
import Slidercard from "./Slidercard";
import "./Style.css";
import Testimonial from "./Testimonial";
function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div className="container">
	   <div className="column">
	     <h2> Sort out your spring look </h2>
		 <p> This is first column of our grid system</p>
     <button className="Shop">Shop</button>
	   </div>
	   <div className="column">
     <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="Shopping"/>
	     
	   </div>
	   <div className="column">
     <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="Shopping"/>
	   </div>
	</div>

  <div className="main">
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="Shopping"/></div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Shopping"/></div>
    
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="Shopping"/></div>
        
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="Shopping"/></div>
        
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="Shopping"/></div>
        
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="Shopping"/></div>
        
      </div>
    </li>
  </ul>
</div>
<h3 className="made_by">Made with ♡</h3>

{/*carousel slider card*/}

<Carousel responsive={responsive}>
  <Slidercard/>
  <Slidercard/>
  <Slidercard/>
  <Slidercard/>
  <Slidercard/>
  <Slidercard/>
  <Slidercard/>
</Carousel>;
<Addpic/>
<Bestseller/>
<Testimonial/>
<Footer/>
    </div>
  );
}

export default Home;
