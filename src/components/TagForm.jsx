import React, {
  useState,
  useContext,
  useEffect,
} from "react";

import { StudentDataContext } from "../provider/StudentDataProvider";

export default function TagForm(props) {
  const [inputTag, setInputTag] = useState("");
  const { addNewTag, studentsData } = useContext(
    StudentDataContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "submit",
      inputTag,
      props.id,
      props.index
    );
    addNewTag(props.index, inputTag);
    setInputTag("");
    updateTags;
  };

  const handleChange = (e) => {
    setInputTag(e.target.value);
  };

  const updateTags = () => {
    console.log(studentsData.tags);
    return (
      studentsData.tags &&
      studentsData.length > 0 &&
      studentsData.tags.map((tag) => {
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
