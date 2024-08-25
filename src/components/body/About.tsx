import fb from "../../assets/fb.svg";
const About = () => {
  return (
    <section className="about-sec">
      <div className="top-about">
        <h1>I'm a Software Engineer.</h1>
        <p className="inline-fb">
          Currently, I'm a Front-end Engineer at <img src={fb} alt="" />{" "}
          Facebook,
        </p>
      </div>
      <div className="bottom-about">
        <p>
          As a dedicated frontend developer with over 3 years of experience, I
          specialize in crafting intuitive and visually striking user interfaces
          that seamlessly bridge user expectations and business objectives. My
          focus is on turning complex problems into simple, elegant solutions
          through clean, efficient code and innovative design.
        </p>
      </div>
    </section>
  );
};

export default About;
