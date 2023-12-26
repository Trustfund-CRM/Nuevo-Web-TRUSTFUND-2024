// components/ScrollContainer.js
import React, { useState } from 'react';

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

  return (
    <div
      style={{ width: '600px', height: '600px', overflow: 'auto', border:"solid 2px red" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onScroll={handleScroll}
    >
      {/* Contenido de tu contenedor */}
    </div>
  );
};

export default ScrollContainer;
