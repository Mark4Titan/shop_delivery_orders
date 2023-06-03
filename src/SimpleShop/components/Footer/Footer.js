import {
  DynamicContainerFooter,
  DynamicUlBlock,
  DynamicUlItem,
  DynamicDivFuter,
  DynLi,
} from "./Styled/Footer.styled";
import {FooterMenu} from "../indexReExport";
import ItemDiv from "./component/ItemDiv";
import ItemLinks from "./component/ItemLinks";

//

const Footer = () => {
  return (
    <>
      <DynamicContainerFooter>
        <DynamicUlBlock>
          {Object.keys(FooterMenu).map((key) => {
            const item = [];

            (key === "aboutCompany" ||
              key === "serviceAndHelp" ||
              key === "contacts") &&
              item.push(
                <DynLi key={key}>
                  <DynamicUlItem key={key}>
                    {ItemLinks(FooterMenu[key])}
                  </DynamicUlItem>
                </DynLi>
              );

            (key === "workSchedule" || key === "additionally") &&
              item.push(
                <DynLi
                  key={key}
                  gridColumn={key === "additionally" ? "1 / 3" : "1 / 2"}
                >
                  <DynamicDivFuter key={key}>
                    {ItemDiv(FooterMenu[key])}
                  </DynamicDivFuter>
                </DynLi>
              );

            return item;
          })}
        </DynamicUlBlock>
      </DynamicContainerFooter>
    </>
  );
};
export default Footer;
