import React, { useContext } from "react";

import { StudentDataContext } from "../provider/StudentDataProvider";

export default function ToggleButton(props) {
  const { toggleOpen, open } = useContext(
    StudentDataContext
  );
  return (
    <button
      className="card__button"
      onClick={() => toggleOpen(props.id)}
    >
      {open.includes(props.id) ? "-" : "+"}
    </button>
  );
}
