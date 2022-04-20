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

  const updateTags = () => {
    return (
      studentsData.tags?.map((tag) => {
        <h1 key={tag.index}>{tag}</h1>;
      })
    );
  };

  return (
    <div>
      {updateTags}
      <form onSubmit={handleSubmit}>
        <input
          value={inputTag}
          placeholder="Add a tag"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
