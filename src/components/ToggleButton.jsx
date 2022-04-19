import React, { useState } from "react";

export default function ToggleButton(props) {
  // const [isToggle, setIsToggle] = useState(false);

  // const handleClick = () => {
  //   setIsToggle(!isToggle);
  // };

  return (
    <button
      className="card__button"
      onClick={() => {
        props.handleToggle();
      }}
    >
      {props.isCollapsed ? "+" : "-"}
    </button>
  );
}
