import hypePilot from '../img/hype-pilot.png';
import knightHypeStudio from '../img/knighthypestudio.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hype Pilot',
    description:
      'A dynamic platform built to manage and amplify brand hype campaigns. Features real-time analytics, campaign scheduling, and audience engagement tools.',
    tags: ['React', 'Node.js', 'REST API'],
    image: hypePilot,
    imageAlt: 'Hype Pilot app screenshot',
    link: 'https://github.com',
    linkLabel: 'View Project',
  },
  {
    id: 2,
    title: 'Knight Hype Studio',
    description:
      'A creative studio dashboard for managing content drops, brand assets, and community engagement — all in one sleek interface.',
    tags: ['React', 'CSS Modules', 'Firebase'],
    image: knightHypeStudio,
    imageAlt: 'Knight Hype Studio app screenshot',
    link: 'https://github.com',
    linkLabel: 'View Project',
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
