// components/ScrollContainer.js
import React, { useState } from 'react';
import VerticalMouseWheelSlider from "./VerticalCarousel.js"
const ScrollContainer = () => {
  const [isScrollEnabled, setScrollEnabled] = useState(true);

  const handleMouseEnter = () => {
    setScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setScrollEnabled(true);
  };

  const handleScroll = (e) => {
    if (!isScrollEnabled) {
      e.preventDefault();
    }
  };
  const cards = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' },
  ];
  return (
    // <div
    //   style={{ width: '600px', height: '600px', overflow: 'auto', border:"solid 2px red" }}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    //   onScroll={handleScroll}
    // >
    //   {/* Contenido de tu contenedor */}
    // </div>
    <VerticalMouseWheelSlider cards={cards}/>
  );
};

export default ScrollContainer;
