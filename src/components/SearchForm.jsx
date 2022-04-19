import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import { StudentDataContext } from "../provider/StudentDataProvider";

export default function SearchForm() {
  const [searchValue, setSearchValue] =
    useState("");
  const { studentsData, setStudentsData } =
    useContext(StudentDataContext);

  //when user type something for search, update result//
  useEffect(() => {
    searchStudent();
  }, [searchValue]);

  function searchStudent() {
    const newData = studentsData.filter(
      (item) => {
        return (
          searchValue.toUpperCase() ===
            item.firstName
              .toUpperCase()
              .substr(0, searchValue.length) ||
          searchValue.toUpperCase() ===
            item.lastName
              .toUpperCase()
              .substr(0, searchValue.length)
        );
      }
    );

    return setStudentsData(newData);
  }
  return (
    <div className="card__input">
      <input
        className="card__input-form"
        type="text"
        value={searchValue}
        placeholder="Search by name"
        onChange={(e) =>
          setSearchValue(e.target.value)
        }
      />
    </div>
  );
}
