import { DynDivElement } from "../Styled/Footer.styled";

 const ElementDiv = (item, key) => (
   <DynDivElement key={key}>{item[key]}</DynDivElement>
);
 export default ElementDiv