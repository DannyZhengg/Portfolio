import "./About.css";

function About() {
  const base = import.meta.env.BASE_URL;
  const images = [
    "pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg",
    "pic6.jpg","pic7.jpg","pic8.jpg","pic9.jpg","pic10.jpg",
    "pic11.jpg","pic12.jpg","pic13.jpg","pic14.jpg","pic15.jpg",
    "pic16.jpg","pic17.jpg","pic18.jpg","pic19.jpg","pic20.jpg"
  ].map(name => `${base}about-gallery/${name}`);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hey! I'm Danny Zheng, Freshman studying Comp Sci & Math @ Yale.
          I like to play badminton, table tennis, taking photos, eating food.
        </p>
      </div>

      <div className="about-gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`pic-${idx + 1}`} className="about-img" />
        ))}
      </div>

      <div className="experiences-awards">
        <h3>Experiences & Awards</h3>
        <ul>
          <li>VEX Robotics Programmer | 2023 - Present</li>
          <li>Yale Computer Science Summer Camp | Summer 2023</li>
          <li>1st Place - CT State VEX Robotics Championship | 2024</li>
          <li>Dean's List - Greenwich High School | 2022-2023</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
