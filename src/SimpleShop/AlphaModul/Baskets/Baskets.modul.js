import products from "../../../products.json";
import {
  // DynButtonTotol,
  // DynH2Totol,
  DynImg,
  DynLi,
  DynLiTotal,
  DynUl,
} from "./Baskets.styled";
import DynamicIcons from "../../components/Main/elementMain/Dynamic/DynamicIcons";
import DynamicButtons from "../../components/Main/elementMain/Dynamic/DynamicButtons";
import { Link } from "../../components/Header/Styled/Link";
import ContactUs from "../../SendReturn/Buy";

const Baskets = ({ productItem, toDisplay }) => {
  let state = 0;

  const Total = (item) => {
    state = state + item.price;
    return item;
  };

  const BasketIn = [];
  products.map((item) =>
    productItem.map((k) => {
      item.id === k && BasketIn.push(Total(item));
      return item;
    })
  );

  return (
    state !== 0 && (
      <DynUl>
        {Object.keys(BasketIn).map((item, pos) => (
          <DynLi key={`${BasketIn[item].id}_${pos}`}>
            <Link to={`/${BasketIn[item].id}`}>
              <DynImg src={BasketIn[item].image} alt={BasketIn[item].title} />
            </Link>
            <div>{BasketIn[item].title}</div>
            <div>{BasketIn[item].price}</div>
            <DynamicIcons key={`${BasketIn[item]}`} item={BasketIn[item]} />
            <DynamicButtons
              key={`${BasketIn[item]}_b`}
              item={BasketIn[item]}
              toDisplay={toDisplay}
            />
          </DynLi>
        ))}
        {toDisplay === "basket" && (
          <DynLiTotal>
            <ContactUs BasketIn={BasketIn} state={state} />
          </DynLiTotal>
        )}
      </DynUl>
    )
  );
};
export default Baskets;
