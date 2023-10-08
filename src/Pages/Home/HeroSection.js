import { Link } from "react-scroll";
import React from "react";
import CopyButton from "./CopyButton";

export default function HeroSection() {
  const email = "jaimanjoshi25@gmail.com";
  const phoneNumber = "+12269757793";

  return (
    <section id="heroSection" className="hero--section ">
      <div className="hero--section--content--box ">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jaiman Joshi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>{" "}
          <p className="hero--section-description">
            Enthusiastic with about 3+ years of experience working as Software.
            <p className="hero--section-description"></p>
            <br /> Possessing excellent interpersonal, critical thinking,
            communication, and leadership skills developed through collaboration
            with project teams, coupled with a strong attitude towards
            continuous learning and growth.
          </p>
        </div>
        <br />
        <div className="hero--section--content--clipboard">
          <div className="hero--section--content--clipboard--email">
            <p>Email: {email}</p>
            <CopyButton text={email} />
          </div>
          <div className="hero--section--content--clipboard--email">
            <p>Phone Number: {phoneNumber}</p>
            <CopyButton text={phoneNumber} />
          </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/Profile.png" alt="Image" />
      </div>
    </section>
  );
}
