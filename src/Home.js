import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        // src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_3000x1200_PRE_Final_en-US_PVD5224._CB410800060_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="2489114"
          title="Women Casual Socks bamboo Think sock Ankle Breathable Odor Resistant Sock 5 Pairs"
          price={15.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71MaPzpUAUL._AC_SY400_.jpg"
        />
        <Product
          id="2489112"
          title="GOTIDEAL Acrylic Paint Set, 24 Colors/Tubes(23ml, 0.77 oz) Non Toxic Non Fading,Rich Pigments for Artist, Hobby Painters, Adults & Kids, Ideal for Canvas Wood Clay Fabric Ceramic Craft Supplies"
          price={23.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71JZvVXVjHL._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="2489113"
          title="Professional Artist Paint Brush Set of 12 - Painting Brushes Kit for Kids, Adults Fabulous for Canvas, Watercolor & Fabric - for Beginners and Professionals - Great for Water, Oil or Acrylic Painting"
          price={8.97}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/815M6utnCVL._AC_SX679_.jpg"
        />
        <Product
          id="2489115"
          title="Artlicious - 25 All Purpose Paint Brush Value Pack - Great with Acrylic, Oil, Watercolor, Gouache"
          price={8.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91TPy6s2TzL._AC_SX679_.jpg"
        />
        <Product
          id="2489116"
          title="PENTA ANGEL Art Paint Tray Palette 3Pcs 6 Well Plastic Rectangular Paint Tray for Kids Watercolor Painting (Square-3PCS)"
          price={4.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51QvP0sufKL._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="2489117"
          title="Canson XL Series Mix Paper Pad, Heavyweight, Fine Texture, Heavy Sizing for Wet or Dry Media, Side Wire Bound, 98 Pound, 5.5 x 8.5 in, 60 Sheets, 5.5'X8.5"
          price={10.66}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81h7GKreoEL._AC_SX679_.jpg"
        />
        <Product
          id="2489118"
          title="Sketching and Drawing Pencils Set, 37-Piece Professional Sketch Pencils Set in Zipper Carry Case, Drawing Kit Art Supplies with Graphite Charcoal Sticks Tool Sketch book for Adults Kids by Shuttle Art"
          price={24.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/717yX2oGwML._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
