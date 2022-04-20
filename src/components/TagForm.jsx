import React, { useState, useContext } from "react";

import { StudentDataContext } from "../provider/StudentDataProvider";

export default function TagForm(props) {
  const [inputTag, setInputTag] = useState("");
  const { addNewTag, studentsData } = useContext(StudentDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewTag(props.index, inputTag);
    setInputTag("");
    updateTags;
  };

  const handleChange = (e) => {
    setInputTag(e.target.value);
  };

  const updateTags =
    studentsData.tags?.map((tag, i) => {

      return <span className="tag_item" key={i}>{tag}</span>


    });

  return (
    <div>
      {updateTags}
      <form onSubmit={handleSubmit} className="tag__form">
        <input className="tag__form-input"
          value={inputTag}
          placeholder="Add a tag"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
