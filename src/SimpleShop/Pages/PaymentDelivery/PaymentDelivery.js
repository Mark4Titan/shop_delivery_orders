import deliveryLogo from "./delivery-logo.webp";
import Pay from "./Pay.svg";
import P24 from "./p24.webp";
import Gpay from "./gpay.webp";
import Visa from "./visa.svg";
import { DynContent, DynH2, DynH4, DynP } from "../Alpha.styled";
import {
  DynDiv,
  DynILiPay,
  DynImg,
  DynImgPay,
  DynLi,
  DynUl,
  DynUlPay,
} from "./PaymentDelivery.styled";

const PaymentDelivery = () => {
  return (
    <DynContent>
      <DynH2>Доставка</DynH2>
      <DynH4>
        Замовлення обробляються в максимально короткі терміни і з повним
        дотриманням гарантій анонімності!
      </DynH4>
      <DynH4>
        За регламентом, відправка здійснюється не пізніше наступного робочого
        дня після надходження оплати або узгодження його відправки післяплатою.
      </DynH4>
      <DynH4>Посилка буде відправлена в день замовлення якщо:</DynH4>
      <DynP>
        Оплата за покупку надійшла до 16:00 з Пн-Пт або до 13:00 в Сб;
        Замовлення оформлене післяплатою було підтверджено усно при телефонному
        дзвінку від оператора до 16:00 з Пн-Пт або до 13:00 в Сб;
      </DynP>

      <DynDiv grid_column="2/3" padding_bottom="60">
        <DynDiv
          grid_column="auto"
          grid_template="1fr/1fr 1fr"
          border="solid 1px #011627b0"
        >
          <DynDiv grid_column="1/3" grid_template="30px 30px/90px 1fr">
            <DynImg src={deliveryLogo} alt={deliveryLogo} />
            <h4>Нова Пошта</h4>
            <h3>Відділення</h3>
          </DynDiv>
          <DynUl>
            <DynLi>
              <div>Безкоштовна доставка</div>
              <div>від 800₴</div>
            </DynLi>
            <DynLi>
              <div>Термін доставки</div> <div>1-2 дні</div>
            </DynLi>
            <DynLi>
              <div>Вартість доставки</div> <div>від 70₴</div>
            </DynLi>
          </DynUl>
        </DynDiv>

        <DynDiv
          grid_column="auto"
          grid_template="1fr/1fr 1fr"
          border="solid 1px #011627b0"
        >
          <DynDiv grid_column="1/3" grid_template="30px 30px/90px 1fr">
            <DynImg src={deliveryLogo} alt={deliveryLogo} />
            <h4>Нова Пошта</h4>
            <h3>Кур'єр</h3>
          </DynDiv>
          <DynUl>
            <DynLi grid_template="auto/1fr">
              <div>Доставка згідно з тарифами перевізника</div>
            </DynLi>
            <DynLi>
              <div>Термін доставки</div> <div>1-2 дні</div>
            </DynLi>
            <DynLi>
              <div>Вартість доставки</div> <div>від 105₴</div>
            </DynLi>
          </DynUl>
        </DynDiv>

        <DynDiv
          grid_column="auto"
          grid_template="1fr/1fr 1fr"
          border="solid 1px #011627b0"
        >
          <DynDiv grid_column="1/3" grid_template="30px 30px/90px 1fr">
            <DynImg src={deliveryLogo} alt={deliveryLogo} />
            <h4>Нова Пошта</h4>
            <h3>Почтомат</h3>
          </DynDiv>
          <DynUl>
            <DynLi>
              <div>Безкоштовна доставка</div> <div>від 800₴</div>
            </DynLi>
            <DynLi>
              <div>Термін доставки</div> <div>1-2 дні</div>
            </DynLi>
            <DynLi>
              <div>Вартість доставки</div> <div>від 70₴</div>
            </DynLi>
          </DynUl>
        </DynDiv>
      </DynDiv>

      <DynH2>Оплата</DynH2>

      <DynDiv grid_template="1fr/1fr">
        <DynUlPay>
          <DynILiPay>
            <DynImgPay src={Pay} alt={Pay} />
            <p>Оплата при отриманні</p>
          </DynILiPay>
          <DynILiPay>
            <DynImgPay src={P24} alt={P24} />
            <p>Оплатити на карту</p>
            <p>Приватбанку</p>
          </DynILiPay>
          <DynILiPay>
            <DynImgPay src={Gpay} alt={Gpay} />
            <p>Оплатити через GPay</p>
          </DynILiPay>
          <DynILiPay>
            <DynImgPay src={Visa} alt={Visa} />
            <p>Online оплата</p>
          </DynILiPay>
        </DynUlPay>
      </DynDiv>
    </DynContent>
  );
};
export default PaymentDelivery;
