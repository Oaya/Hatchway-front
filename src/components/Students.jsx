import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import StudentTestList from "./StudentTestList";
import ToggleButton from "./ToggleButton";

function Students() {
  const [studentsData, setStudentsData] =
    useState([]);
  const [searchValue, setSearchValue] =
    useState("");

  const [open, setOpen] = useState([]);

  //get api request at for first render//
  useEffect(() => {
    axios
      .get(
        `https://www.hatchways.io/api/assessment/students`
      )
      .then((res) => {
        setStudentsData(res.data.students);
        console.log(res.data.students);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const toggleOpen = (id) => {
    if (open.includes(id)) {
      setOpen(open.filter((sid) => sid !== id));
    } else {
      let newOpen = [...open];
      newOpen.push(id);
      setOpen(newOpen);
    }
  };

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
  const handleClick = (e, i) => {
    console.log(i);
  };

  return (
    <div className="card">
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

      {studentsData.map((item) => {
        return (
          <div
            key={item.id}
            className="card__item"
          >
            <img
              src={item.pic}
              alt="avatar"
              className="card__image"
            />
            <div className="card__content">
              <h1 className="card__name">
                {item.firstName} {item.lastName}
              </h1>
              <p>Email:{item.email}</p>
              <p>Company:{item.company}</p>
              <p>Skill:{item.skill}</p>
              <p>
                Average:
                {item.grades.reduce(
                  (acc, cur) => +acc + +cur,
                  0
                ) / item.grades.length}
                %
              </p>
              {open.includes(item.id) && (
                <StudentTestList
                  grades={item.grades}
                />
              )}
            </div>
            <button
              className="card__button"
              onClick={() => toggleOpen(item.id)}
            >
              {open.includes(item.id) ? "-" : "+"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Students;
