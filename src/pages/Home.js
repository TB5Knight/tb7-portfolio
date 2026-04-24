import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">TB7Knight</h1>
          <h2 className="hero__title">Full-Stack Developer</h2>
          <p className="hero__description">
            I build clean, performant web applications with a focus on great
            user experiences. Passionate about turning ideas into polished
            digital products.
          </p>
          <div className="hero__cta">
            <Link to="/projects" className="btn btn--primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__avatar">TB7</div>
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
        </div>
      </section>

      <section className="highlights">
        {[
          { label: 'Projects Built', value: '10+' },
          { label: 'Years Coding', value: '3+' },
          { label: 'Technologies', value: '15+' },
        ].map(({ label, value }) => (
          <div key={label} className="highlight-card">
            <span className="highlight-card__value">{value}</span>
            <span className="highlight-card__label">{label}</span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
