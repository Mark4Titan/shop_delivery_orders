import PhonesRender from "./Phones";
import SocialsRender from "./SOCIAL";

const additionally = {
  subscribe: "ПІДПИСАТИСЯ НА НОВИНИ ТА АКЦІЇ!",
  Social: SocialsRender,
  copyrightSign: "© 2023 'SimpleShop'",
};
export const Mail = "markfamiliytitan@gmail.com";
export const WorkSchedule = {
  title: "ГРАФІК РОБОТИ",
  weekdays: "Пн-Пт: 10:00 - 19:00",
  saturday: "Сб: 10:00 - 15:00",
  sunday: "Нд: Вихідний",
  acceptingOrders: {
    title: "Прийом замовлень онлайн:",
    content: "цілодобово, без вихідних.",
  },
};

const FooterMenu = {
  aboutCompany: {
    title: "ПРО КОМПАНІЮ",
    // reviews: "Відгуки про магазин",
    contacts: "Контакти",
    cooperation: "B2B співпраця",
    loyaltyProgram: "Програма лояльності",
    brands: "Бренди",
  },
  serviceAndHelp: {
    title: "СЕРВІС ТА ДОПОМОГА",
    paymentDelivery: "Оплата і доставка",
    productReturn: "Повернення товару",
    // blog: "Новини, блог",
    public: "Публічна оферта",
  },
  contacts: {
    title: "КОНТАКТИ",
    Phone: PhonesRender,
    mail: Mail,
  },
  workSchedule: WorkSchedule,
  additionally,
};
export default FooterMenu;
