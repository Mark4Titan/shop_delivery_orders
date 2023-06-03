import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BuyInput, BuyTextarea, BuyUl } from "./Buy.styled";
import { DynamicButton } from "../ComponentStyled/Button.styled";
import { useDispatch } from "react-redux";
import { setProductClearActions } from "../../redux/services/ProductSlice";
const {
  REACT_APP_YOUR_SERVICE_ID,
  REACT_APP_YOUR_TEMPLATE_ID,
  REACT_APP_YOUR_PUBLIC_KEY,
} = process.env;

const ContactUs = ({ BasketIn, state }) => {

  const form = useRef();
  const dispatch = useDispatch();
  

  const ItemBuy = BasketIn.map(
    (elem) => `\n id: ${elem.id} \n ${elem.title}`
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_YOUR_SERVICE_ID,
        REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          result.text=== "OK" && dispatch(setProductClearActions());
        },
        (error) => {
          console.log(
            error.text,
            "функція доступна, але заблокована на GitHab"
          );
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <BuyUl>
        <li>
          <BuyInput required placeholder="Ім'я" type="text" name="user_name" />
        </li>
        <li>
          <BuyInput
            required
            placeholder="Фамілія"
            type="text"
            name="user_fam"
          />
        </li>
        <li>
          <BuyInput
            required
            placeholder="Телефон"
            type="text"
            name="user_phone"
          />
        </li>
        <BuyTextarea
          placeholder="Message"
          name="message"
          defaultValue={ItemBuy}
        />
        <li>
          <h2>Total:</h2>
        </li>
        <li>
          <h2>{state}</h2>
        </li>
        <li>
          <DynamicButton            
            color={"#313131"}
            backgroundColor={"white"}
            backgroundColorHov={"#313131"}
            borderSolid={"#313131"}
            borderRadius={"2"}
            width={"140"}
            width_hover={"140"}
            type="submit"
          >
            Придбати
          </DynamicButton>
        </li>
      </BuyUl>
    </form>
  );
};
export default ContactUs;
