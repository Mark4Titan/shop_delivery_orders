import { useSelector } from "react-redux";
import { getProduct, Baskets } from "../indexReExport";
import { DynDiv, DynDivBuy, DynDivContent, DynH2 } from "./Basket.styled";

const Basket = () => {
  const { productBuy, buy } = useSelector(getProduct);

  return (
    <DynDiv>
      <DynDivContent>
        <DynH2>Кошик</DynH2>
        {/*  */}
        <Baskets key="basketIn" productItem={productBuy} toDisplay={"basket"} />
        {productBuy.length < 1 && buy !== true && (
          <DynH2 padding_bottom="50vh">Покищо порожній :((</DynH2>
        )}
        {buy && (
          <DynDivBuy>
            <h2>Замовлення прийнято.</h2>
            <h2>Невдовзі з вами свяжется для уточнення інформації</h2>
          </DynDivBuy>
        )}
      </DynDivContent>
    </DynDiv>
  );
};
export default Basket;
