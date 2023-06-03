import ElementDiv from "./ElementDiv";
import Title from "./Title";
import Accepting from "./Accepting";
import Subscribe from "./Subscribe";
import {SocialsRender} from "../../indexReExport";
import { DynDivIco } from "../Styled/Footer.styled";

const ItemDiv = (item) => {
  return Object.keys(item).map((key) => {
    const items = [];
    key === "title" && items.push(Title(item[key]));
    key === "acceptingOrders" && items.push(Accepting(item, key));
    key === "subscribe" && items.push(Subscribe(item, key));
    key === "Social" &&
      items.push(<DynDivIco key={key}>{SocialsRender()}</DynDivIco>);

    key !== "title" &&
      key !== "acceptingOrders" &&
      key !== "subscribe" &&
      key !== "Social" &&
      items.push(ElementDiv(item, key));
    return items;
  });
};
export default ItemDiv;
