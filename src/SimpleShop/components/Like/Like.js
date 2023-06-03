import { useSelector } from "react-redux";
import { getProduct, Baskets } from "../indexReExport";
import { DynDiv, DynH2 } from "./Lice.styled";

const Likes = () => {
  const { productLike } = useSelector(getProduct);
  return (
    <DynDiv>
      <DynDiv
        background_color="rgb(255, 255, 255)"
        padding="0px 15px"
        grid_template="1fr/1fr minmax(auto, 880px) 1fr"
      >
        {productLike.length > 0 && <DynH2>Сподобалось</DynH2>}
        <Baskets key="likesIn" productItem={productLike} toDisplay={"likes"} />
        {productLike.length < 1 && (
          <DynH2 padding_bottom="50vh">Ще нічого не сподобалось :((</DynH2>
        )}
      </DynDiv>
    </DynDiv>
  );
};
export default Likes;
