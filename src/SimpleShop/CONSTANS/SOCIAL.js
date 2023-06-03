import { Icons } from "./ICONS";

const Social = [
  { viber: "https://www.viber.com/ru/" },
  { telegram: "https://web.telegram.org/z/" },
  { instagram: "https://www.instagram.com/" },
];


const SocialsRender = () => {
  return (
    Social.map((keys) =>
        Object.keys(keys).map((key) => (
          <a
            key={`a_${key}`}
            target={`_blank`}
            aria-label={`link ${key}`}
            href={keys[key]}
          >
            {Icons[key]()}
          </a>
        ))
      )
  );
};

export default SocialsRender