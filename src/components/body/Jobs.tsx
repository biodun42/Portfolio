import figma from "../../assets/Figma.svg";
import react from "../../assets/React icon.svg";
import javascript from "../../assets/Javascript.svg";
import css from "../../assets/css.svg";
import lineOne from "../../assets/line1.svg";
import lineTwo from "../../assets/line2.svg";
import lineThree from "../../assets/line3.svg";
import lineFour from "../../assets/line4.svg";
import glowing from "../../assets/Glowing-icon.svg";

const Jobs = () => {
  return (
    <section className="jobs">
      <h1>
        I'm currently looking to join a <span>cross-functional</span> team that
        values improving people's lives through accessible design
      </h1>
      <div className="icons">
        <div className="each-icon">
          <div></div>
          <img className="figma" src={figma} alt="" />
        </div>
        <div className="each-icon">
          <div></div>
          <img className="react" src={react} alt="" />
        </div>
        <div className="each-icon">
          <div></div>
          <img className="javascript" src={javascript} alt="" />
        </div>
        <div className="each-icon">
          <div></div>
          <img className="css" src={css} alt="" />
        </div>
      </div>
      <div className="lines">
        <img className="line-fig" src={lineOne} alt="" />
        <img className="line-react" src={lineTwo} alt="" />
        <img className="line-java" src={lineThree} alt="" />
        <img className="line-css" src={lineFour} alt="" />
      </div>
      <div className="glowing-box">
        <div className="box"></div>
        <img src={glowing} alt="" />
      </div>
    </section>
  );
};

export default Jobs;
