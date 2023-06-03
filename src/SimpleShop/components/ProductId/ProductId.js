import { useParams } from "react-router-dom";
import {products} from "../indexReExport";
import DynamicButtons from "../Main/elementMain/Dynamic/DynamicButtons";
import DynamicIcons from "../Main/elementMain/Dynamic/DynamicIcons";
import {
  DynDivButtons,
  DynDivCenter,
  DynDivContent,
  DynDivForm,
  DynDivImg,
  DynDop,
  DynImg,
  DynInfo,
  DynName,
} from "./Styled/Product.styled";

const ProductId = () => {
  const { id } = useParams();
  const idProduct = parseInt(id);

  const item = [];
  Object.keys(products).filter(
    (key) => products[key].id === idProduct && item.push(products[key])
  );

  return (
    <DynDivForm>
      <DynDivCenter>
        {item.map((key) => (
          <DynDivContent key={`id_${key}`}>
            <DynDivImg>
              <DynImg src={key.image} alt={key.description} />
            </DynDivImg>
            <DynName>{key.title}</DynName>
            <DynInfo key={key.id} id={key.id} data-category={key.category}>
              <p>{key.description}</p>
              <DynDop>
                <div>{`Price: ${key.price}`}</div>
                <div>{`rate: ${key.rating.rate}`}</div>
                <div>{`count: ${key.rating.count}`}</div>
              </DynDop>
              <DynDivButtons>
                <DynamicIcons key={`button1_${key}`} item={key} />
                <DynamicButtons key={`button2_${key}`} item={key} toDisplay="shop" />
              </DynDivButtons>
            </DynInfo>
          </DynDivContent>
        ))}
      </DynDivCenter>
    </DynDivForm>
  );
};
export default ProductId;
