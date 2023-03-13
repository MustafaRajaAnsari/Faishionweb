import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Testimonial.css";
export default function Testimonial() {
  return (
    <div>
      <h1>What our customer says</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" alt="/"/>
          <div className="myCarousel">
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site.
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
            <h1>Shirley Fultz</h1>
            <h3>Product Designer</h3>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" alt="/" />
          <div className="myCarousel">
            
            <p>
            It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site.
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site.         
            </p>
            <h1>Daniel Keystone</h1>
            <h3>Product Designer</h3>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" alt="/"/>
          <div className="myCarousel">
            
            <p>
            It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site.
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site.
            </p>
            <h1>Theo Sorel</h1>
            <h3>Product Designer</h3>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
