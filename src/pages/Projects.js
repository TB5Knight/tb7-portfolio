import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A clean, responsive personal portfolio built with React and React Router. Features smooth navigation and a dark-mode design system.',
    tags: ['React', 'CSS', 'React Router'],
    github: 'https://github.com',
    live: null,
  },
  {
    id: 2,
    title: 'Task Manager App',
    description:
      'A full-stack task management application with user authentication, drag-and-drop boards, and real-time updates via WebSockets.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: null,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that pulls live forecast data from a public API. Supports city search, hourly forecasts, and a 7-day outlook.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    github: 'https://github.com',
    live: null,
  },
  {
    id: 4,
    title: 'E-Commerce Store',
    description:
      'A front-end e-commerce prototype with a product catalog, cart management, and checkout flow built purely in React with Context API.',
    tags: ['React', 'Context API', 'CSS Modules'],
    github: 'https://github.com',
    live: null,
  },
];

const Projects = () => {
  return (
    <main className="projects">
      <div className="projects__container">
        <header className="page-header">
          <p className="page-header__tag">What I've built</p>
          <h1 className="page-header__title">Projects</h1>
        </header>

        <div className="projects__grid">
          {projects.map(({ id, title, description, tags, github, live }) => (
            <article key={id} className="project-card">
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
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  GitHub &rarr;
                </a>
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--live"
                  >
                    Live &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
