import { useState } from "react";
import { DynButton } from "../Styled/Company.styled";
import { Icons } from "../../indexReExport";

// //
const Burger = () => {
  const [stateBurger, setBurger] = useState(false);
  const BurgerTogle = () => {
    setBurger(!stateBurger);
  };
  const Close = Icons.close;
  const Burger = Icons.burger;
  return (
    <DynButton fill_activ={"#011627b0"} key={`burger_`} onClick={BurgerTogle}>
      {!stateBurger ? <Burger /> : <Close />}
    </DynButton>
  );
};

export default Burger;
