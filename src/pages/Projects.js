import hypePilot from '../img/hype-pilot.png';
import knightHypeStudio from '../img/knighthypestudio.png';
import heroImage from '../img/hero-image.jpg';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hype Pilot',
    description:
      'This is my planner design app called Hype Pilot. The app allows users to add tasks with due dates, view tasks in a calendar, label tasks by priority (Top Priority, Mid Priority, or Low Priority), track their progress, and receive reminder alerts for all tasks and upcoming due dates.Users can create an account and log in to access their personalized planner.',
    tags: ['React', 'Node.js', 'Supabase', 'Vercel'],
    image: hypePilot,
    imageAlt: 'Hype Pilot app screenshot',
    link: 'https://hype-pilot-app.vercel.app/',
    linkLabel: 'View Project',
  },
  {
    id: 2,
    title: 'Knight Hype Studio',
    description:
      'This is a creative art studio website I designed for DIG 4503C called KnightHypeStudio. The website allows users to create and explore digital art. It was designed with a mobile-responsive layout, ensuring it functions smoothly on both mobile devices and desktop screens.',
    tags: ['HTML', 'CSS Stylesheets', 'Netlify'],
    image: knightHypeStudio,
    imageAlt: 'Knight Hype Studio app screenshot',
    link: 'https://knighthypestudio3.netlify.app/',
    linkLabel: 'View Project',
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
          {projects.map(({ id, title, description, tags, image, imageAlt, link, linkLabel }) => (
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
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  {linkLabel} &rarr;
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
