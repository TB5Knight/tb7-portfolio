import heroImage from '../img/hero-image.jpg';
import './About.css';

const skills = [
  { category: 'Frontend', items: ['HTML', 'React', 'CSS', 'Javascript.'] },
  { category: 'Physical', items: ['Time management & prioritization', 'Creative Thinking', 'Clear written and verbal communication', 'Strategic planning'] },
  { category: 'Tools', items: ['Adobe Photoshop', 'GitHub', 'VS Code', 'Figma', 'Graphic design'] },
];

const About = () => {
  return (
    <main
      className="about page-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.82), rgba(10,10,10,0.92)), url(${heroImage})`,
      }}
    >
      <div className="about__container">
        <header className="page-header">
          <p className="page-header__tag">Get to know me</p>
          <h1 className="page-header__title">About Me</h1>
        </header>

        <section className="about__bio">
          <div className="about__text">
            <p>
             My name is Taylor Burdgess. I was born and raised in Tampa, Florida. I currently attend the University of Central Florida. 
             I transferred to UCF in 2023 after attending Hillsborough Community College, where I played basketball and earned my Associate of Arts 
             degree in Business Administration. In 2024, I switched my major from Business to Digital Media – Web Interactive.
            </p>
            <p>
           This portfolio showcases school design projects and personal work I’ve completed recently to 
           highlight my creativity, skills, and passion for becoming a designer in the near future.
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
