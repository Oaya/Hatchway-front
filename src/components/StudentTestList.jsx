import React from "react";

export default function StudentTestList(props) {
  return (
    <div>
      {props.grades.map((grade, i) => (
        <p key={i}>
          Test {i + 1}: {grade} %
        </p>
      ))}
    </div>
  );
}
