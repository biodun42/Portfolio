import instagram from "../../assets/Instagram.svg";
import twitter from "../../assets/Twitter.svg";
import github from "../../assets/Github.svg";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <div className="cd">
        <p>
          I'm currently looking to join a cross-functional team that values
          improving people's lives through accessible design. or have a project
          in mind? Let's connect.
        </p>
        <p>Muhammedabiodun42@gmail.com</p>
        <div className="links">
          <a href="https://www.instagram.com/bio_dun2516?igsh=MWJpdzQ5ZWlvazdiZw=="><img src={instagram} alt="" /></a>
          <a href="https://x.com/Muhamme67875743?t=6EqatYOjNxEswN5pX0qG9w&s=09"><img src={twitter} alt="" /></a>
          <a href="https://github.com/biodun42"><img src={github} alt="" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
