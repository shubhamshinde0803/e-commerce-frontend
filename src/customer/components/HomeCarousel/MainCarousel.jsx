import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const MainCarousel = () => {
    
    const items = 

  return (<AliceCarousel
    animationType="fadeout"
    animationDuration={800}
    disableButtonsControls
    infinite
    items={items}
    mouseTracking
  />)
};

export default MainCarousel;
