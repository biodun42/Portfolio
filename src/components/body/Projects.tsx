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
          <div className="glass-like">
            <button>
            DAMIEN: Capture Moments with Luxe Lens
            Experience the art of photography with Luxe Lens. Explore a curated collection of stunning images across various genres, from landscapes to portraits. View high-resolution photos, learn about the stories behind each shot, and discover the photographer's unique style. Create a personalized gallery, share your favorite images, and connect with the photographer to discuss commissions and projects. Elevate your visual experience with Luxe Lens.
            </button>
          </div>
          <div className="cursor">
            <img src={cursor} alt="" />
            <img src={cursor} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
