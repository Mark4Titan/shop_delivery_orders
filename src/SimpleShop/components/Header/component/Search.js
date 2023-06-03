import { DynamicDivSearch } from "../Styled/Search.styled";
import { DynamicInputSearch } from "../Styled/Search.styled";
import { DynamicButIco } from "../../../ComponentStyled/ButtonIco.styled";
import { Icons, setSearchActions } from "../../indexReExport";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const searchTitel = "Search..";

const Search = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState(false);
  const [stateInput, setStateInput] = useState("");

  const ValueIn = (value) => {
    const validator = value === " " ? "" : value;

    dispatch(setSearchActions(validator));
    setState(validator.length > 0);
    setStateInput(validator);
  };

  const ClearAll = () => {
    setState("");
    setStateInput("");
    dispatch(setSearchActions(""));
  };
  const Clear = Icons.clear;
  const Search = Icons.search;

  return (
    <DynamicDivSearch
      key={`search_div_`}
      gridTemplate={!state ? "1fr/ 1fr 40px" : "1fr/ 1fr 40px 40px"}
    >
      <DynamicInputSearch
        key={`input_`}
        type="text"
        name="input"
        placeholder={searchTitel}
        onChange={(e)=>ValueIn(e.target.value)}
        value={stateInput}
        width={!state ? "170" : "130"}
      />
      {state && (
        <DynamicButIco onClick={ClearAll} key={`clear_`}>
          <Clear />
        </DynamicButIco>
      )}
      <DynamicButIco key={`search_`}>
        <Search />
      </DynamicButIco>
    </DynamicDivSearch>
  );
};
export default Search;
