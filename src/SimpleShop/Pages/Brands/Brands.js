import { DynContent, DynH2, DynLi,} from "../Alpha.styled";
import { DynDivBorder, DynUl } from "./Brands.styled";

const Brands = () => {
  const brend = [
    "Duck Side",
    "DUSHA",
    "De La Mark",
    "Enjoy the wood",
    "El' dress",
    "Elena Pigul",
    "GALVANI",
    "Garrt",
    "Gem",
    "GOR",
    "Manna Ceramics",
    "Meetty Chocolate",
    "MARIGOLD NATURAL",
    "MOL`FAR",
    "Merry Jams",
    "MustHave",
  ];
  return (
    <DynContent>
      <DynH2>Бренди</DynH2>
      <DynDivBorder grid_column="2/3">
        <DynUl>
          {brend.map((el) => (
            <DynDivBorder>
              <DynLi>{el}</DynLi>
            </DynDivBorder>
          ))}
        </DynUl>
      </DynDivBorder>
    </DynContent>
  );
};
export default Brands;
