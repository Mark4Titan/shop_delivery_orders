import { products, getSearch } from "../../indexReExport";
import DynamicButtons from "./Dynamic/DynamicButtons";
import DynamicIcons from "./Dynamic/DynamicIcons";
import { DynamicUl, DynamicLi } from "./Styled/List.styled";
import {
  DynamicDiv,
  DynamicDivIco,
  DynamicH3,
  Link,
} from "./Styled/Contayner.styled";
import { DynamicImg } from "./Styled/Img.styled";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

const Products = () => {
  const { search } = useSelector(getSearch);
  const [item, setItems] = useState(products);

  useEffect(() => {
      setItems(() => {
        return products.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      });
  }, [search]);

  return (
    <DynamicUl>
      {item.map((key) => (
        <DynamicLi key={key.id} id={key.id} data-category={key.category}>
          <DynamicH3>{key.title}</DynamicH3>
          <Link to={`/${key.id}`}>
            <DynamicDiv data-description={key.description}>
              <DynamicImg src={key.image} alt={key.description} />
            </DynamicDiv>
          </Link>
          <DynamicDivIco>
            <p>{`Ціна: ${key.price} USD`}</p>
            <DynamicIcons key={key} item={key} />
          </DynamicDivIco>

          <DynamicButtons key={key} item={key} toDisplay="shop" />
        </DynamicLi>
      ))}
    </DynamicUl>
  );
};
export default Products;
