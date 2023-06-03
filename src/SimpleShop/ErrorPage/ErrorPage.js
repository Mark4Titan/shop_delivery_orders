import {
  DynamicH1Error,
  DynamicP,
  Link,
} from "./Error.styled";

export default function ErrorPage() {
  // const PageItem = notAddPages.filyer((k) => pathname===k);

  return (
    <>
      <DynamicH1Error>Йой!</DynamicH1Error>
      <DynamicP>
        Вибачте, сталася неочікувана помилка. <br />
        <Link to="/">На головну!</Link>
      </DynamicP>
    </>
  );
}
