import { useState } from "react";
import useStore from "../store/store";

const SectionFour = () => {
  const [text, setText] = useState();
  const arr2 = useStore((state) => state.arr2);
  const addObj = useStore((state) => state.addObj);
  const delObj = useStore((state) => state.delObj);

  const handleAddObj = () => {
    addObj(text);
  };

  const handleDelObj = (id) => {
    delObj(id);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log(arr2);
  return (
    <div>
      <h1>Section4</h1>
      <p>Todo Obj {arr2.length}</p>
      <input onChange={handleChange} type="text" />
      <button onClick={handleAddObj}>add</button>
      {arr2.map((item, index) => (
        <li key={index}>
          {item.title}{" "}
          <button onClick={() => handleDelObj(item.id)}>del</button>
        </li>
      ))}
    </div>
  );
};
export default SectionFour;
