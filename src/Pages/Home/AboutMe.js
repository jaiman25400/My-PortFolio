import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Tech Stack</p>
          <h2 className="skills-section--heading">Not Limited to </h2>{" "}
          <div className="about--section--img">
            <div className="skills--section--container">
              {data?.techStack?.map((item, index) => (
                <div key={index} className="about--section-skill-box">
                  <div className="skills--section--img">
                    <img src={item.imageUrl} alt="Product Chain" />
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h2 className="skills-section--heading">Who I am </h2>{" "}
          <h3 className="skills-section--heading-comment">
            {" "}
            // More Than a Tech Enthusiast
          </h3>
          <p className="hero--section-description">
            I am a versatile Full Stack Developer with a passion for tackling
            diverse challenges in the ever-evolving world of technology. Beyond
            this, I am a quick learner who comfortably adapts to different
            roles, demonstrating agility in every endeavor. Armed with a
            Master's degree in Applied Computing from the University of Windsor
            and a Bachelor's in IT.
          </p>
          <p className="hero--section-description">
            I have an insatiable appetite for challenges and a love for hustling
            to overcome them. I thrive in environments that foster learning and
            growth, constantly questioning whether I'm the best at what I do and
            striving to push my limits. Whether I'm diving deep into code or
            competing in the world of gaming, I relish the opportunity to excel.
            Outside the digital realm, you'll find me on the cricket ground,
            table tennis arena, chessboard, or football field, always eager to
            play, compete, and have a good time. Simply put, I'm the kind of
            tech-savvy individual who believes can work with anything and
            relishes the adventure in doing so!
          </p>
          <p className="hero--section-description">
            In addition to my technical skills, I excel in managing tasks,
            demonstrating leadership, and thriving under pressure. My unwavering
            commitment and loyalty drive me to deliver results that exceed
            expectations. I am passionate about emerging technologies like AI
            and blockchain, and I have a proven track record of leveraging data
            analysis and manipulation to drive business growth. Whether it's
            client-facing interactions or translating data into actionable
            insights, I am dedicated to achieving outcomes that enhance business
            success. My multifaceted skill set, passion for innovation, and
            penchant for hard work make me a valuable asset in any technological
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
