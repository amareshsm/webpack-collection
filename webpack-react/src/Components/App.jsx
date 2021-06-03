import "../styles/style.scss";
import Utility from "./Utility";
import sample from "../images/sample-png.png";
import sampleSVG from "../images/sample-svg.svg";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="hero"></div>
        <div className="content">Hello world !</div>
        <img src={sample} alt="sample" width="250" />
        <img src={sampleSVG} alt="sample" width="250" />
        <Utility />
      </div>
    </>
  );
};
export default App;
