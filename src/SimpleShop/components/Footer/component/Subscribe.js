import { DynDivSubscribe, DynDivSubscribeInput } from "../Styled/Footer.styled";
import { Icons } from "../../indexReExport";

  const Subscribe = (item, key) => (
    <DynDivSubscribe key={`div_${key}_`}>
      <span key={`span_${key}_`}>{item[key]}</span>
      <DynDivSubscribeInput>
        <input
          key={`input_${key}`}
          placeholder="E-mail"
          type="text"
          name="input"
        />
        {Icons.arrow()}
      </DynDivSubscribeInput>
    </DynDivSubscribe>
);
  export default Subscribe