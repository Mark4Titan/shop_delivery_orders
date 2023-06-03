import {
  Icons,
  CompanyRender,
  SocialsRender,
  PhonesRender,
} from "../indexReExport";

import Search from "./component/Search";
import Likes from "./component/Likes";
import Baskets from "./component/Basket";
import Burger from "./component/Burger";
import { useInView } from "react-intersection-observer";
import {
  DynamicUlHeader,
  DynamicLiHeader,
  DynamicHeader,
  AfterDiv,
} from "./Styled/Header.Styled";
import { DynBat } from "./Styled/Company.styled";

const headerMenu = {
  phone: PhonesRender,
  social: SocialsRender,
  company: CompanyRender,
  search: Search,
  like: Likes,
  burger: Burger,
  basket: Baskets,
};

const Header = () => {
  const { ref, inView } = useInView(true);
  // //
  const toUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const IcoUp = Icons.up;
  return (
    <>
      <DynamicHeader>
        <DynamicUlHeader>
          {Object.keys(headerMenu).map((key, pos) => (
            <DynamicLiHeader key={`${key}_${pos}`} SC={{ key }}>
              {headerMenu[key]()}
            </DynamicLiHeader>
          ))}
        </DynamicUlHeader>
        <DynBat bottom={`${inView ? "-90" : "90"}`} onClick={toUp}>
          <IcoUp />
        </DynBat>
      </DynamicHeader>
      {<AfterDiv key="inView" ref={ref} />}
    </>
  );
};
export default Header;
