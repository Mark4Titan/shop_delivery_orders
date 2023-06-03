import {
  getProduct,
  setProductBuyActions,
  setProductUnBuyActions,
  setProductLikeActions,
  setProductUnLikeActions,
} from "../../redux/services/ProductSlice";
import Baskets from "../AlphaModul/Baskets/Baskets.modul";
import SocialsRender from "../CONSTANS/SOCIAL";
import CompanyRender from "../CONSTANS/LOGO";
import PhonesRender from "../CONSTANS/Phones";
import { Icons } from "../CONSTANS/ICONS";
import FooterMenu from "../CONSTANS/FooterMenu";
import { setSearchActions } from "../../redux/services/SearchSlice";
import { DynamicButton } from "../ComponentStyled/Button.styled";
import AuditProduct from "../HELPERS/AuditProducts";
import { DynButton } from "./Header/Styled/Company.styled";
import products from "../../products.json";
import { getSearch } from "../../redux/services/SearchSlice";


export {
  getProduct,
  Baskets,
  SocialsRender,
  CompanyRender,
  PhonesRender,
  AuditProduct,
  getSearch,
  products,
  DynButton,
  Icons,
  FooterMenu,
  setSearchActions,
  DynamicButton,
  setProductBuyActions,
  setProductUnBuyActions,
  setProductLikeActions,
  setProductUnLikeActions,
};
