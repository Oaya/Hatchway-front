import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

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
      .get(`https://www.hatchways.io/api/assessment/students`)
      .then((res) => {
        setStudentsData(res.data.students);
        setFilteredData(res.data.students);
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
    let fullName;

    if (value) {
      studentsData.map((student) => {
        fullName = (student.firstName + student.lastName).toUpperCase();

        if (fullName.includes(value)) {
          nameFilteredData.push(student);
        }
      });
      setFilteredData(nameFilteredData);
      setNameFilteredData(nameFilteredData);
    } else {
      setFilteredData(tagFilteredData);
    }
  };

  //search by tag//
  const searchStudentByTag = (value) => {
    const filteredArray = [];
    const taggedArray = [];
    if (value) {
      filteredData.map((data) => {
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
