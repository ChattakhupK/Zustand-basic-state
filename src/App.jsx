import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const App = () => {
  return (
    <div>
      <SectionOne />
      <hr style={{ margin: "30px 0" }} />
      <SectionTwo />
      <hr style={{ margin: "30px 0" }} />
      <SectionThree />
      <hr style={{ margin: "30px 0" }} />
      <SectionFour />
      <hr style={{ margin: "30px 0" }} />
      <SectionFive />
    </div>
  );
};
export default App;
