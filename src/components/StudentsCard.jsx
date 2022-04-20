import React, { useContext } from "react";

import StudentList from "./StudentList";
import SearchForm from "./SearchForm";
import { StudentDataContext } from "../provider/StudentDataProvider";

function StudentsCard() {
  const {
    searchStudentByName,
    searchStudentByTag,
  } = useContext(StudentDataContext);

  return (
    <div className="card">
      <div className="card__header">
        <SearchForm
          ph="Search by name"
          searchFn={searchStudentByName}
        />
        <SearchForm
          ph="Search by tag"
          searchFn={searchStudentByTag}
        />
      </div>
      <StudentList />
    </div>
  );
}
export default StudentsCard;
