import PhonesRender from "../../CONSTANS/Phones";
import { Mail } from "../../CONSTANS/FooterMenu";
import { WorkSchedule } from "../../CONSTANS/FooterMenu";
import { DynContent, DynH2 } from "../Alpha.styled";
import { DynDivBlock, DynDivContacts, DynDivP, DynSmallP } from "./Contacts.styled";

const Contacts = () => {
  const WorkScheduleRender = () => {
    return (
      <>
        <div>{WorkSchedule.title}</div>
        <div>
          <div>{WorkSchedule.weekdays}</div>
          <div>{WorkSchedule.saturday}</div>
          <div>{WorkSchedule.sunday}</div>
          <DynSmallP>{WorkSchedule.acceptingOrders.title}</DynSmallP>
          <DynSmallP>{WorkSchedule.acceptingOrders.content}</DynSmallP>
        </div>
      </>
    );
  };

  return (
    <DynContent>
      <DynH2>Контакти</DynH2>
      <DynDivContacts>
        <DynDivBlock>
          <div>Телефони:</div>
          <DynDivP>
            <PhonesRender />
          </DynDivP>
          <div>Email:</div>
          <DynDivP>
            <a
              key={`a_${Mail}`}
              aria-label={`link ${Mail}`}
              href={`mailto:${Mail}`}
            >
              {Mail}
            </a>
          </DynDivP>

          <div>Адреса:</div>
          <div>Українаб м. Хмельницький</div>
          <WorkScheduleRender />
        </DynDivBlock>
      </DynDivContacts>
    </DynContent>
  );
};
export default Contacts;
