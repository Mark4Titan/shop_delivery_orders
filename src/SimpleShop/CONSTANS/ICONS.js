import { SiViber, SiTelegram, SiInstagram } from "react-icons/si";
import { SlBasket, SlBasketLoaded} from "react-icons/sl";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";
import { TbStar, TbStarOff } from "react-icons/tb";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Icons = {
  viber: SiViber,
  telegram: SiTelegram,
  instagram: SiInstagram,
  basket: SlBasket,
  basketIn: SlBasketLoaded,
  basketClose: AiOutlineClose,
  search: BiSearchAlt,
  clear: AiOutlineClear,
  like: TbStar,
  dislike: TbStarOff,
  arrow: BsFillArrowRightSquareFill,
  burger: GiHamburgerMenu,
  close: FaWindowClose,
  up: AiOutlineCaretUp,
};
