import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section ">
      <div className="hero--section--content--box ">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jaiman Joshi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Enthusiastic with about 3+ years of experience
            <br /> Possessing excellent interpersonal, critical thinking,
            communication, and leadership skills developed through collaboration
            with project teams, coupled with a strong attitude towards
            continuous learning and growth
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/Profile.png" alt="Imgae" />
      </div>
    </section>
  );
}
