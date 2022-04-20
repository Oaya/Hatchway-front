import React, {
  useEffect,
  useState,
} from "react";

export default function SearchForm(props) {
  const [inputValue, setInputValue] =
    useState("");

  useEffect(() => {
    handleChange;
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    props.searchFn(
      e.target.value.toUpperCase().trim()
    );
  };

  return (
    <div className="card__input">
      <input
        className="card__input-form"
        type="text"
        value={inputValue}
        placeholder={props.ph}
        onChange={handleChange}
      />
    </div>
  );
}
