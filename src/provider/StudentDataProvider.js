import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

export const StudentDataContext = createContext();

export default function StudentDataProvider(
  props
) {
  const [studentsData, setStudentsData] =
    useState([]);

  //get api request at for first render//
  useEffect(() => {
    axios
      .get(
        `https://www.hatchways.io/api/assessment/students`
      )
      .then((res) => {
        setStudentsData(res.data.students);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //adding new tag to the studentData when user input//
  const addNewTag = (index, tag) => {
    const StudentTagData = [...studentsData];

    if (
      StudentTagData[index].tags === undefined
    ) {
      StudentTagData[index].tags = [tag];
    } else {
      StudentTagData[index].tags.push(tag);
    }
    setStudentsData(StudentTagData);
  };

  const providerData = {
    studentsData,
    setStudentsData,
    addNewTag,
  };

  return (
    <StudentDataContext.Provider
      value={providerData}
    >
      {props.children}
    </StudentDataContext.Provider>
  );
}
