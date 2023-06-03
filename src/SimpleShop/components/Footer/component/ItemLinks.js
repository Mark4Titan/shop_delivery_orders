import Title from "./Title";
import Mail from "./Mail";
import LiLink from "./LiLink";

const ItemLinks = (item) => {
  return Object.keys(item).map((key) => {
    const items = [];
    key === "title" && items.push(Title(item[key]));
    key === "Phone" && items.push(item[key]());
    key === "mail" && items.push(Mail(item, key));

    key !== "title" &&
      key !== "mail" &&
      key !== "Phone" &&
      key !== "acceptingOrders" &&
      items.push(LiLink(item, key));

    return items;
  });
};
export default ItemLinks