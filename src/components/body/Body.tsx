import arrow from "../../assets/arrow.svg";
import me from "../../assets/Me.svg";
import ellipseFive from "../../assets/Ellipse 5.svg";
const Body = () => {
  return (
    <section className="body">
      <div className="hello-txt">
        <img className="arrow" src={arrow} alt="arrow" />
        <h1>
          Hello! I Am <span>Muhammed Abiodun</span>
        </h1>
      </div>
      <div className="me-image">
        <img className="Pic" src={me} alt="me" />
        <div className="about">
          <h4>A Developer who</h4>
          <h1>
            Infuses every <br />
            pixel with{" "}
            <span className="spn2">
              <img className="ellipse5" src={ellipseFive} alt="" /> insight
            </span>
            ...
          </h1>
          <p>Because if the design doesn’t captivate, what else will?</p>
        </div>
      </div>
    </section>
  );
};

export default Body;
