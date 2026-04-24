import './About.css';

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Linux'] },
];

const About = () => {
  return (
    <main className="about">
      <div className="about__container">
        <header className="page-header">
          <p className="page-header__tag">Get to know me</p>
          <h1 className="page-header__title">About Me</h1>
        </header>

        <section className="about__bio">
          <div className="about__text">
            <p>
              I'm a full-stack developer with a passion for building thoughtful,
              user-focused web applications. I enjoy the entire lifecycle of a
              project — from wireframe to deployment — and take pride in writing
              clean, maintainable code.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source projects, or sharpening my problem-solving skills
              through personal projects.
            </p>
            <p>
              I'm always looking for opportunities to collaborate on interesting
              projects and grow as a developer.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2 className="skills__heading">Skills & Technologies</h2>
          <div className="skills__grid">
            {skills.map(({ category, items }) => (
              <div key={category} className="skill-group">
                <h3 className="skill-group__category">{category}</h3>
                <ul className="skill-group__list">
                  {items.map((item) => (
                    <li key={item} className="skill-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
