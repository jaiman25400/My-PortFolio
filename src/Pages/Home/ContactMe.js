export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Lets Get In Touch</p>
        <h2>Contact Me at</h2>
      </div>
      <div className="contact--icons">
        <a className="contact--icons-a" href="mailto:jaimanjoshi99@gmail.com">
          <img
            className="contact--icons--img"
            src="./img/Gmail.png"
            alt="Gmail"
          />
        </a>
        <a
          className="contact--icons-a"
          href="https://www.linkedin.com/in/jaimanjoshi/"
        >
          <img
            className="contact--icons--img"
            src="./img/LinkedIn.png"
            alt="LinkedIn"
          />
        </a>
        <a className="contact--icons-a" href="tel:+2269757793">
          <img
            className="contact--icons--img"
            src="./img/Phone.png"
            alt="Phone"
          />
        </a>
        <a
          className="contact--icons-a"
          href="https://github.com/jaiman25400?tab=repositories"
        >
          <img
            className="contact--icons--img"
            src="./img/Github.png"
            alt="GitHub"
          />
        </a>
      </div>
    </section>
  );
}
