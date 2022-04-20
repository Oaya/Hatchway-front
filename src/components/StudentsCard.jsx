import React, { useContext } from "react";

import StudentList from "./StudentList";
import SearchForm from "./SearchForm";
import { StudentDataContext } from "../provider/StudentDataProvider";

function StudentsCard() {
  const {
    studentsData,
    setStudentsData,
    open,
    toggleOpen,
  } = useContext(StudentDataContext);

  const searchStudentByName = (value) => {
    if (value) {
      let fullName;
      const newData = studentsData.filter(
        (student) => {
          fullName = (
            student.firstName + student.lastName
          )
            .toUpperCase()
            .trim();
          return fullName.includes(value);
        }
      );

      return setStudentsData(newData);
    }
  };

  const searchStudentByTag = (value) => {
    if (value) {
      const filteredArray = [];
      const newArray = studentsData.filter(
        (data) => data.hasOwnProperty("tags")
      );

      newArray.map((student) => {
        student.tags.map((tag) => {
          console.log(
            tag
              .toUpperCase()
              .substr(0, value.length),
            tag,
            value
          );
          if (
            value ===
            tag
              .toUpperCase()
              .substr(0, value.length)
          ) {
            filteredArray.push(student);
          }
        });
      });
      return setStudentsData(filteredArray);
    }
  };

  return (
    <div className="card">
      <SearchForm
        ph="Search by name"
        searchFn={searchStudentByName}
      />
      <SearchForm
        ph="Search by tag"
        searchFn={searchStudentByTag}
      />
      <StudentList />
    </div>
  );
}
export default StudentsCard;
