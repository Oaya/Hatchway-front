import React, { useEffect, useState } from "react";

export default function SearchForm({ searchFn, ph }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    handleChange;
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    searchFn(e.target.value.toUpperCase().trim());
  };

  return (
    <div className="card__input">
      <input
        className="card__input-form"
        type="text"
        value={inputValue}
        placeholder={ph}
        onChange={handleChange}
      />
    </div>
  );
}
