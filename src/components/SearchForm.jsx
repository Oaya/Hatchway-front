import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import { StudentDataContext } from "../provider/StudentDataProvider";

export default function SearchForm(props) {
  const {
    studentsData,
    setStudentsData,
    searchValue,
    setSearchValue,
  } = useContext(StudentDataContext);
  const [inputValue, setInputValue] =
    useState("");

  useEffect(() => {
    props.searchFn();
  }, [searchValue]);

  return (
    <div className="card__input">
      <input
        className="card__input-form"
        type="text"
        value={inputValue}
        placeholder={props.ph}
        onChange={(e) => {
          setInputValue(e.target.value);
          props.searchFn(
            e.target.value.toUpperCase().trim()
          );
        }}
      />
    </div>
  );
}
