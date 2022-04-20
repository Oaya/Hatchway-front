import React, { useContext } from "react";

import StudentTestList from "./StudentTestList";
import ToggleButton from "./ToggleButton";
import TagForm from "./TagForm";
import { StudentDataContext } from "../provider/StudentDataProvider";

export default function StudentList() {
  const { open, filteredData } = useContext(StudentDataContext);

  return (
    <div>
      {filteredData.map((item, index) => {
        return (
          <div key={item.id} className="card__item" >
            <div lassName="card__image-container">
              <img
                src={item.pic}
                alt="avatar"
                className="card__image"
              />
            </div>
            <div className="card__content">
              <h1 className="card__name">
                {item.firstName.toUpperCase()}{" "}
                {item.lastName.toUpperCase()}
              </h1>
              <div className="card__content-list">
                <p>Email:{item.email}</p>
                <p>Company:{item.company}</p>
                <p>Skill:{item.skill}</p>

                <p>
                  Average:
                  {item.grades.reduce((acc, cur) => +acc + +cur, 0) / item.grades.length}
                  %
                </p>

                {open.includes(item.id) && (
                  <StudentTestList
                    grades={item.grades}
                  />
                )}

                {item.tags?.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}

                <TagForm
                  id={item.id}
                  index={index}
                />

              </div>
            </div>
            <ToggleButton id={item.id} />
          </div>
        );
      })}
    </div>
  );
}
