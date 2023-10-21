import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Home = () => {
     const [items, setItems] = useState([]);
    
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });
    return (
      <div>
        <h2 className="text-4xl font-bold text-center pt-20">
          Build YOUR successfully Future with proper training
        </h2>
        {/* First banner */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 my-16">
          {items.map((item) => (
            <Cards item={item}></Cards>
          ))}
        </div>
      </div>
    );
};

export default Home;