import React, {
  useState,
  useContext,
} from "react";

import StudentTestList from "./StudentTestList";
import ToggleButton from "./ToggleButton";
import SearchForm from "./SearchForm";
import { StudentDataContext } from "../provider/StudentDataProvider";
import TagForm from "./TagForm";

function StudentsCard() {
  const [open, setOpen] = useState([]);
  const { studentsData } = useContext(
    StudentDataContext
  );

  const toggleOpen = (id) => {
    if (open.includes(id)) {
      setOpen(open.filter((sid) => sid !== id));
    } else {
      let newOpen = [...open];
      newOpen.push(id);
      setOpen(newOpen);
    }
  };

  return (
    <div className="card">
      <SearchForm />

      {studentsData.map((item, index) => {
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
              <TagForm
                id={item.id}
                index={index}
              />

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
export default StudentsCard;
