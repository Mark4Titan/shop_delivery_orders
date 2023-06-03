import Logo from "./logo.png";
import { DynamicDivLogo,DynamicImgLogo } from "../components/Header/Styled/Company.styled";
import { LinkHome } from "../components/Header/Styled/Link";
import useMedia from "use-media";

export const Company = [
  {
    Logo,
    companyName: "Сompany Name",
    call: "motto!",
  },
];

const CompanyRender = () => {
  const isWide = !useMedia({ maxWidth: 900 });
  return Company.map((keys) => (
    <LinkHome
      to="/"
      key={`home_${keys}`}
      aria-label={`link home`}
      href="/simple-shop-react"
    >
      <DynamicDivLogo key={`div_${keys}`}>
        <DynamicImgLogo key={`a_${keys}`} alt="Logo" src={keys.Logo} />
        {isWide && <h3>{keys.companyName}</h3>}
        {isWide && <p>{keys.call}</p>}
      </DynamicDivLogo>
    </LinkHome>
  ));
};
export default CompanyRender;
