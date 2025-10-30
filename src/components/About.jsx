import "./About.css";

function About() {
  const images = Array.from(
    { length: 20 },
    (_, i) => `/about-gallery/pic${i + 1}.jpg`
  );

  return (
    <section id="about" className="about">
      {/* Text description on top */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hey! I'm Danny Zheng, Freshman studying Comp Sci & Math @ Yale.
          I like to play racket sports, traveling, taking photos, and eating food.
        </p>
      </div>

      {/* Horizontal scrolling gallery below */}
      <div className="about-gallery">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`pic-${idx + 1}`}
            className="about-img"
          />
        ))}

        {images.map((src, idx) => (
          <img
            key={`dup-${idx}`}
            src={src}
            alt=""
            className="about-img"
          />
        ))}
      </div>

      <div className="experiences-awards">
        <h2>Experiences/Awards</h2>
        <ul>
          <li>Amazon SDE Internship</li>
          <li>Catalyst Developer</li>
          <li>C. Prescott Davis Scholar</li>
          <li>J. McMullen Dean's Scholar</li>
          <li>Vex Robotics 9909B lead programmer</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
