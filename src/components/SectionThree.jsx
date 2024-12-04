import { useEffect, useState } from "react";
import useStore from "../store/store";
import { shallow } from "zustand/shallow";

const SectionThree = () => {
  const [text, setText] = useState("");
  const arr1 = useStore((state) => state.arr1);
  const addTodo = useStore((state) => state.addTodo);
  const delToda = useStore((state) => state.delTodo);

  const handleAddTodo = () => {
    addTodo(text);
  };
  const handleDelTodo = (idx) => {
    delToda(idx);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log(arr1);
  return (
    <div>
      <h1>Section3</h1>
      Todo {arr1.length}{" "}
      <p>
        <input onChange={handleChange} type="text" />
        <button onClick={handleAddTodo}>Add</button>
      </p>
      {arr1.map((item, index) => {
        return (
          <li key={index}>
            {item} <button onClick={() => handleDelTodo(index)}>del</button>
          </li>
        );
      })}
    </div>
  );
};
export default SectionThree;
