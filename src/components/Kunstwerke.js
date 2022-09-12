import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Kunstwerke = () => {

  let images = [];
  images = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => ({
    src: `images/Art${number}.jpg`
  }));
  console.log(images)
  return (
    <body className='bg-black '>
      <div className='Carousel-Container bg-dark p-5 text-center p-lg-5'>
        <Carousel className='main-slide'>
          {images.map(image => {
            return (
              <div>
                <img src={image.src} height="450px" width="250px" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </body>
  )
}

export default Kunstwerke