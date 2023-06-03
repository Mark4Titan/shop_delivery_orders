import {
  DynDivDot,
  DynDivDots,
  DynDivSlider,
  DynImgSlider,
} from "./Slider.styled";
import Promo1 from "./promo/promo1.jpg";
import Promo2 from "./promo/promo2.jpg";
import Promo3 from "./promo/promo3.jpg";
import { useState } from "react";
import moment from 'moment';
//  треба додати source і переробити масив slid на масив обєктів
// https://web.dev/i18n/ru/serve-images-webp/

const slid = [Promo1, Promo2, Promo3];

const Slider = () => {
  const [stateSlider, setStateSlider] = useState(0);
  const [stateHHmm, setHHss] = useState(parseInt(moment().format('mm')));

  const NextSlider = () => {
    setStateSlider(() =>
      stateSlider + 1 > slid.length - 1 ? 0 : stateSlider + 1
      );   
      setHHss(parseInt(moment().format('mm')))
  };
    setInterval(() => { 
        if (parseInt(moment().format('mm')) >= stateHHmm+5) {            
            NextSlider();
        }
    }, 50000);

  const SlidDisplay = () => {
    const Dots = [];
    const Items = slid.map((ItemSlide, pos) => {
      Dots.push(
        <DynDivDot
          id={pos}
          key={`dots_${pos}`}
          width={stateSlider === pos ? "28" : "3"}
          onClick={(e) => setStateSlider(parseInt(e.target.id))}
        ></DynDivDot>
      );
      return (
        <DynImgSlider
          id={pos}
          key={`img_${pos}`}
          src={ItemSlide}
          alt={`slid ${ItemSlide}`}
          onClick={NextSlider}
          opacity={stateSlider === pos ? "1" : "0"}
        />
      );
    });

    Items.push(<DynDivDots key="items_slider">{Dots}</DynDivDots>);
    return Items;
  };

  return <DynDivSlider key="Slider">{SlidDisplay()}</DynDivSlider>;
};
export default Slider;
