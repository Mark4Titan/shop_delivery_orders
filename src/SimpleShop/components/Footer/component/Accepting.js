import { DynDiv } from "../Styled/Footer.styled";

  const Accepting = (item, key) => {
    const elem = Object.keys(item[key]).map((k, pos) => (
      <p key={`p_${key}_${pos}`}>{item[key][k]}</p>
    ));
    return <DynDiv key={`div_${key}`}>{elem}</DynDiv>;
};
  export default Accepting