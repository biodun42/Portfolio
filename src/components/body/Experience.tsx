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
          <img src={cardOneImg} alt="Project Screenshot 1" />
          <div className="card-details">
            <h1>Responsive Web Design</h1>
            <p>
              Developed a fully responsive website using modern CSS techniques
              to ensure seamless display across all devices screen sizes.
            </p>
            <button><a href="https://nft-marketplace-cyan-theta.vercel.app/">View Project</a></button>
          </div>
        </div>
        <div className="card">
          <img src={cardTwoImg} alt="Project Screenshot 2" />
          <div className="card-details">
            <h1>JavaScript Components</h1>
            <p>
              Created dynamic and interactive web components using JavaScript,
              enhancing user engagement and functionality.
            </p>
            <button><a href="https://luxe-aisle-ecommerce.vercel.app/">View Project</a></button>
          </div>
        </div>
        <div className="card">
          <img src={cardThreeImg} alt="Project Screenshot 3" />
          <div className="card-details">
            <h1>React App Development</h1>
            <p>
              Built a single-page application using React, demonstrating
              component-based architecture and state management.
            </p>
            <button><a href="https://sushi-page-with-react.vercel.app/">View Project</a></button>
          </div>
        </div>
        <div className="card">
          <img src={cardFourImg} alt="Project Screenshot 4" />
          <div className="card-details">
            <h1>API Integration</h1>
            <p>
              Implemented API integration to fetch and display real-time data,
              enhancing the user experience with up-to-date information.
            </p>
            <button><a href="https://ip-address-locator-rose.vercel.app/">View Project</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
