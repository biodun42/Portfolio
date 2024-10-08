import cursor from "../../assets/icon-park-solid_click.svg";
import projectOne from "../../assets/Screenshot 2024-08-24 174322.png";
import projectTwo from "../../assets/Screenshot 2024-08-25 092140.png";

const Projects = () => {
  return (
    <section className="project">
      <div className="each-project">
        <div className="left-project">
          <div className="top-left">
            <p>Featured Project</p>
            <h1>Luxe Aisle Ecommerce</h1>
          </div>
          <div className="glass-like">
            <button>
              LUXE AISLE ECOMMERCE WEB APP:Experience a premium shopping journey
              with Luxe Aisle. Browse luxury fashion, view detailed product
              information, add items to your cart, and place orders seamlessly.
              Manage your cart, track orders, and receive personalized
              recommendations to elevate your shopping experience.
            </button>
          </div>
          <div className="cursor">
            <img src={cursor} alt="" />
            <img src={cursor} alt="" />
          </div>
        </div>
        <div className="right-project">
          <a href="https://luxe-aisle-ecommerce.vercel.app/">
            <img src={projectOne} alt="" />
          </a>
        </div>
      </div>
      <div className="each-project-two">
        <div className="right-project-two">
          <a href="https://photographer-portfolio-seven.vercel.app/">
            <img src={projectTwo} alt="" />
          </a>
        </div>
        <div className="left-project-two">
          <div className="top-left lpt">
            <p>Featured Project</p>
            <h1>Photographer Portfolio</h1>
          </div>
          <div className="glass-like-two">
            <button>
            Unveil the beauty of the world with Damien Lens. Dive into a collection of captivating photographs that tell stories beyond words, spanning from urban street scenes to serene nature landscapes. Browse through our high-definition gallery, learn about the inspiration behind each photo, and gain insights into the photographer's perspective.
            </button>
          </div>
          <div className="cursor-two">
            <img src={cursor} alt="" />
            <img src={cursor} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
