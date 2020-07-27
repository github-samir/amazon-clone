import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
        alt="banner-img"
        width="1200"
        height="350"
      />
      <div className="home-row">
        <Product
          id="123"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus aliquam aliquid"
          rating="5"
          img="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
        />
        <Product
          id="55"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus aliquam aliquid"
          rating="5"
          img="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="45"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus aliquam aliquid"
          rating="5"
          img="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
        />
        <Product
          id="97"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus aliquam aliquid"
          rating="5"
          img="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
        />
        <Product
          id="23"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus aliquam aliquid"
          rating="5"
          img="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="123"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus aliquam aliquid"
          rating="5"
          img="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
