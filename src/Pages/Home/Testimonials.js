import data from "../../data/index.json";

export default function Testimonials() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading ">My Experience</h2>
          <p className="sub--title">
            Full Stack Developer with 3+ years of Experience
          </p>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
            <div className="text-sm testimonial--date">{item.Date}</div>
            <p className="text-md">{item.description}</p>
            <div className="text-md testimonial--section--card--author--detail">
              {item.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
