import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">

        <a 
          href="https://github.com/DannyZhengg/High-Stakes-2024-25" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card"
        >
          <h3>High Stakes Vex Robotics</h3>
          <p>
            A robotics programming project where I developed and optimized autonomous 
            routes for VEX competition using Lemlib and odometry
          </p>
        </a>

        <a 
          href="https://docs.google.com/document/d/1Qhg1oHPmmBZVbvOELT5tVReEhOFtCdEM2BP9NSzrcGc/edit?tab=t.0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card"
        >
          <h3>Archives Essay</h3>
          <p>It's the year 2125, students from the class "What History Teaches" opened up your archive what will it say....</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
