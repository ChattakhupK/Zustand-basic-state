import { useEffect } from "react";
import useStore from "../store/store";

const SectionFive = () => {
  const data = useStore((state) => state.data);
  const isLoading = useStore((state) => state.isLoading);
  const error = useStore((state) => state.error);
  const errorMsg = useStore((state) => state.errorMsg);
  const getData = useStore((state) => state.getData);

  console.log(data, isLoading, error, errorMsg);

  const fetchData = () => {
    getData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Section5</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>{errorMsg}</p>
      ) : (
        data.map((item, index) => <li key={index}>{item.name}</li>)
      )}
    </div>
  );
};
export default SectionFive;
