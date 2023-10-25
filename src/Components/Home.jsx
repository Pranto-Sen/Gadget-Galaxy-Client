import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Slider from './Slider';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

const Home = () => {
     const [items, setItems] = useState([]);
    
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });
    return (
      <div>
        <Slider></Slider>
        <h2 className="text-4xl font-bold text-center pt-20">
          Choice your brand
        </h2>
        {/* First banner */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 my-16">
          {items.map((item) => (
            <Cards item={item}></Cards>
          ))}
        </div>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
};

export default Home;