import { shallow } from "zustand/shallow";
import useStore from "../store/store";

const SectionTwo = () => {
  // แบบนี้จะทำให้เรียกลูปไปเรื้อยไม่ควร
  // const { value, incNum, decNum } = useStore(
  //   (state) => ({
  //     value: state.value,
  //     incNum: state.incNum,
  //     decNum: state.decNum,
  //   }),
  // );

  //ใข้แบบนี้ไปก่อน
  const value = useStore((state) => state.value);
  const incNum = useStore((state) => state.incNum);
  const decNum = useStore((state) => state.decNum);

  const handleIncNum = () => {
    incNum();
  };
  const handleDecNum = () => {
    decNum();
  };

  console.log(value);

  return (
    <div>
      <h1>Section2</h1>
      value : {value}
      <p>
        <button onClick={handleIncNum}>+ Number</button>
        <button onClick={handleDecNum}>- Number</button>
      </p>
    </div>
  );
};
export default SectionTwo;
