//s1 create a store
import { useState } from "react";
import useStore from "../store/store";
const SectionOne = () => {
  const [text, setText] = useState("");

  //s2 use store
  const fname = useStore((state) => state.fname);
  const lname = useStore((c) => c.lname);
  const setName = useStore((state) => state.setName);

  const handleSetname = () => [setName(text)];
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Section1</h1>
      <p>
        hello {fname} {lname}
      </p>
      <input onChange={handleChange} type="text" />
      <button onClick={handleSetname}>set name</button>
    </div>
  );
};
export default SectionOne;
