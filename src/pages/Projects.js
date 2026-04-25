import hypePilot from '../img/hype-pilot.png';
import knightHypeStudio from '../img/knighthypestudio.png';
import heroImage from '../img/hero-image.jpg';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hype Pilot',
    description:
      'This is my planner design app called Hype Pilot. The app allows users to add tasks with due dates, view tasks in a calendar, label tasks by priority (Top Priority, Mid Priority, or Low Priority), track their progress, and receive reminder alerts for all tasks and upcoming due dates. Users can create an account and log in to access their personalized planner.',
    reflection: 'If I revisited Hype Pilot today, I would focus more on refining the user experience early in the design process, especially around task organization and navigation. I would also make the authencation more seamless where users can sign up easily than just using email and password. I would try to improve the features to better serve the needs of its users.',
    tags: ['React', 'Node.js', 'Supabase', 'Vercel'],
    image: hypePilot,
    imageAlt: 'Hype Pilot app screenshot',
    liveLink: 'https://hype-pilot-app.vercel.app/',
    liveLabel: 'Live Deploy Link',
    
    githubLink: 'https://github.com/TB5Knight/hype-pilot-app',
    githubLabel: 'GitHub',
    
  },
  {
    id: 2,
    title: 'Knight Hype Studio',
    description:
      'This is a creative art studio website I designed for DIG 4503C called KnightHypeStudio. The website allows users to create and explore digital art. It was designed with a mobile-responsive layout, ensuring it functions smoothly on both mobile devices and desktop screens.',
    reflection: 'If I were to redesign KnightHypeStudio, I would place a stronger emphasis on user engagement and interactive features. While the site is mobile-responsive and visually consistent, I would enhance the creative experience by adding more dynamic elements, such as real-time previews or community-driven content.',
    tags: ['HTML', 'CSS Stylesheets', 'Netlify'],
    image: knightHypeStudio,
    imageAlt: 'Knight Hype Studio app screenshot',
    liveLink: 'https://knighthypestudio3.netlify.app/',
    liveLabel: 'Live Deploy Link',
    githubLink: 'https://github.com/TB5Knight/Knight-hype-studio',
    githubLabel: 'GitHub',
  },
];

const Projects = () => {
  return (
    <main
      className="projects page-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.80), rgba(10,10,10,0.90)), url(${heroImage})`,
      }}
    >
      <div className="projects__container">
        <header className="page-header">
          <p className="page-header__tag">What I've built</p>
          <h1 className="page-header__title">Projects</h1>
        </header>

        <div className="projects__grid">
          {projects.map(({ id, title, description, reflection, tags, image, imageAlt, liveLink, liveLabel, githubLink, githubLabel }) => (
            <article key={id} className="project-card">

              <div className="project-card__image-wrap">
                <img
                  src={image}
                  alt={imageAlt}
                  className="project-card__image"
                />
              </div>

              <div className="project-card__body">
                <h2 className="project-card__title">{title}</h2>
                <p className="project-card__description">{description}</p>
                {reflection && (
                  <div className="project-card__reflection">
                    <h3 className="project-card__reflection-heading">What I'll Do Differently</h3>
                    <p className="project-card__description">{reflection}</p>
                  </div>
                )}
                <ul className="project-card__tags">
                  {tags.map((tag) => (
                    <li key={tag} className="project-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-card__footer">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--primary"
                >
                  {liveLabel} &rarr;
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--secondary"
                >
                  {githubLabel} &rarr;
                </a>
              </div>

            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
