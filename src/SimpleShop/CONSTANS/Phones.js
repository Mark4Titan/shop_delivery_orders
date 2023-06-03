const Phone = ["0983366033", "0639461447"];

const PhonesRender = () => {
  const Pars = (keys) => {
    const castomPhone = [];
    castomPhone.push("(");
    castomPhone.push(keys.substring(0, 3));
    castomPhone.push(") ");
    castomPhone.push(keys.substring(3, 6));
    castomPhone.push(" ");
    castomPhone.push(keys.substring(6, 8));
    castomPhone.push(" ");
    castomPhone.push(keys.substring(8, keys.length));
    return castomPhone.join("");
  };

  return Phone.map((keys) => (
    <div key={`div_${keys}`}>
      <a key={`a_${keys}`} aria-label={`link ${keys}`} href={`tel:${keys}`}>
        {Pars(keys)}
      </a>
    </div>
  ));
};
export default PhonesRender;
