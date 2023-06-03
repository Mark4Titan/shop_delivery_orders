import Slider from "../Slider/Slider";
import Products from "./elementMain/Products";
import { DynamicMain, DynamicDiv } from "./Main.styled";

const Main = () => {
  return (
    <DynamicMain>
      <DynamicDiv>
        <Slider />
        <Products />
      </DynamicDiv>
    </DynamicMain>
  );
};
export default Main;
