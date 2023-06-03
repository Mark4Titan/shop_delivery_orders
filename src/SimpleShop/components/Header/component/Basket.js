import { Link } from "../Styled/Link";
import { Icons, getProduct } from "../../indexReExport";
import { useSelector } from "react-redux";

const Baskets = () => {
  const { productBuy } = useSelector(getProduct);
  const Basket = Icons.basket;
  const BasketIn = Icons.basketIn;

  return productBuy.length > 0 ? (
    <Link
      to="/basket"
      fill_activ={"#ff6a00"}
      fill={"#011627b0"}
      key={`basketIns_Link`}
    >
      <BasketIn />
    </Link>
  ) : (
    <Link to="/basket" fill_activ={"#011627b0"} key={`dislikes_Link_in`}>
      <Basket />
    </Link>
  );
};
export default Baskets;
