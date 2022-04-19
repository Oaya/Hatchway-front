import React, {
  useState,
  useContext,
} from "react";
import { StudentDataContext } from "../provider/StudentDataProvider";

export default function TagForm(props) {
  const [inputTag, setInputTag] = useState("");
  const { addNewTag } = useContext(
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
  };

  const handleChange = (e) => {
    setInputTag(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputTag}
        placeholder="Add a tag"
        onChange={handleChange}
      />
    </form>
  );
}
