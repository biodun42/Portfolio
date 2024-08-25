import cardOneImg from "../../assets/Card1.svg";
import cardTwoImg from "../../assets/Card2.svg";
import cardThreeImg from "../../assets/Card3.svg";
import cardFourImg from "../../assets/Card4.svg";

const Experience = () => {
  return (
    <section className="experience">
      <h1>Work Experience</h1>
      <div className="all-card">
        <div className="card">
          <img src={cardOneImg} alt="" />
          <div className="card-details">
            <h1>CIB on the mobile</h1>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="card">
          <img src={cardTwoImg} alt="" />
          <div className="card-details">
            <h1>CIB on the mobile</h1>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="card">
          <img src={cardThreeImg} alt="" />
          <div className="card-details">
            <h1>CIB on the mobile</h1>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="card">
          <img src={cardFourImg} alt="" />
          <div className="card-details">
            <h1>CIB on the mobile</h1>
            <p>
              Take your client onboard seamlessly by our amazing tool of digital
              onboard process.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
