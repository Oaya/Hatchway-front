import React from "react";

//please note:  I did not write the pathing myself.  I took an svg icon and converted it to react.
const OpenIcon = (props) => {
  return (
    <div
      onClick={() => {
        props.setIsCollapsed(!props.isCollapsed);
      }}
    >
      +
    </div>
  );
};

export default OpenIcon;
