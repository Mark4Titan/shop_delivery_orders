import {
  DynamicButton,
  AuditProduct,
  Icons,
  getProduct,
  setProductBuyActions,
  setProductUnBuyActions,
} from "../../../indexReExport";


import { useSelector, useDispatch } from "react-redux";

const DynamicButtons = ({ item, toDisplay }) => {
  const { productBuy } = useSelector(getProduct);
  const dispatch = useDispatch();

  // додаємо якщо немає в store, або віднімаємо //
  const BuyIn = (idProduct) => {
    const id = AuditProduct(idProduct, productBuy);
    id === -1
      ? dispatch(setProductBuyActions(idProduct))
      : dispatch(setProductUnBuyActions(idProduct));
  };
  //
  const BasketClose = Icons.basketClose;
  return (
    <>
      {AuditProduct(parseInt(item.id), productBuy) !== -1 ? (
        <DynamicButton
          id={item.id}
          onClick={(e) => BuyIn(parseInt(e.target.id))}
          color={"#313131"}
          backgroundColor={"white"}
          backgroundColorHov={"#313131"}
          borderSolid={"#313131"}
          borderRadius={"2"}
          width={"120"}
          width_hover={"120"}
        >
          <BasketClose id={item.id} />
        </DynamicButton>
      ) : (
        <DynamicButton
          id={item.id}
          onClick={(e) => BuyIn(parseInt(e.target.id))}
          backgroundColor={"#313131"}
          backgroundColorHov={"#313131"}
          borderSolid={"#313131"}
          borderRadius={"2"}
          width={toDisplay === "likes" ? "120" : "180"}
          width_hover={toDisplay === "likes" ? "120" : "180"}
        >
          Додати
        </DynamicButton>
      )}
    </>
  );
};
export default DynamicButtons;
