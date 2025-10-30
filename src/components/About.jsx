import "./About.css";

function About() {
  const base = import.meta.env.BASE_URL; // this ensures correct path on GitHub Pages
  const images = Array.from({ length: 20 }, (_, i) => `${base}about-gallery/pic${i + 1}.jpg`);

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
    </section>
  );
}

export default About;
