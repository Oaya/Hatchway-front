import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
}

export const StudentDataContext = createContext();

export default function StudentDataProvider(props) {
  const [studentsData, setStudentsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nameFilteredData, setNameFilteredData] = useState([]);
  const [tagFilteredData, setTagFilteredData] = useState([]);

  //get api request at for first render//
  useEffect(() => {
    axios
      .get(`https://www.hatchways.io/api/assessment/students`, config)
      .then((res) => {
        setStudentsData(res.data.students);
        setFilteredData(res.data.students);
        setNameFilteredData(res.data.students);
        setTagFilteredData(res.data.students);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //adding new tag to the studentData when user input//
  const addNewTag = (index, tag) => {
    const studentTagData = [...studentsData];

    if (studentTagData[index].tags === undefined) {
      studentTagData[index].tags = [tag];
    } else {
      studentTagData[index].tags.push(tag);
    }
    setStudentsData(studentTagData);
  };

  //toggle the grade data//
  const toggleOpen = (id) => {
    if (open.includes(id)) {
      setOpen(open.filter((sid) => sid !== id));
    } else {
      const newOpen = [...open];
      newOpen.push(id);
      setOpen(newOpen);
    }
  };

  //search by name//
  const searchStudentByName = (value) => {
    const nameFilteredData = [];
    const contentFilterData = [];
    let fullName;

    if (value) {

      studentsData.map((student) => {
        fullName = (student.firstName + student.lastName).toUpperCase();

        if (fullName.includes(value)) {
          nameFilteredData.push(student);
        }

      });
      nameFilteredData.map(data => {
        fullName = (data.firstName + data.lastName).toUpperCase();
        if (fullName.includes(value)) {
          contentFilterData.push(data);
        }
      });

      setFilteredData(contentFilterData);
      setNameFilteredData(nameFilteredData);
    }
  };

  //search by tag//
  const searchStudentByTag = (value) => {
    const filteredArray = [];
    const taggedArray = [];
    console.log(value, nameFilteredData)
    if (value) {
      studentsData.map((data) => {
        if (data.hasOwnProperty("tags")) {
          taggedArray.push(data);
        }
      });
      taggedArray.map((student) => {
        student.tags.map((tag) => {
          if (value === tag.toUpperCase().substr(0, value.length)) {
            filteredArray.push(student);
          }
        });
      });
      console.log(filteredArray)

      setFilteredData(filteredArray);
      setTagFilteredData(filteredArray);
    } else {
      setFilteredData(nameFilteredData);
    }
  };

  const providerData = {
    studentsData,
    searchValue,
    open,
    filteredData,
    setOpen,
    setSearchValue,
    setStudentsData,
    addNewTag,
    toggleOpen,
    setFilteredData,
    searchStudentByName,
    searchStudentByTag,
  };

  return (
    <StudentDataContext.Provider value={providerData}>
      {props.children}
    </StudentDataContext.Provider>
  );
}
