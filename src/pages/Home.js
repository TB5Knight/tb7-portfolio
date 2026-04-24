import { Link } from 'react-router-dom';
import heroImage from '../img/hero-image.jpg';
import aiImage from '../img/ai-image.jpg';
import './Home.css';

const Home = () => {
  return (
    <main
      className="home page-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.78), rgba(10,10,10,0.88)), url(${heroImage})`,
      }}
    >
      <section className="hero">
        <div className="hero__content">
          <p className="hero__greeting">Hello, my name is</p>
          <h1 className="hero__name">Taylor Burdgess</h1>
          <h2 className="hero__title">Web Designer</h2>
          <p className="hero__description">
            A designer passionate about creating clean, thoughtful, 
            and user-friendly designs.
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

        <div className="hero__visual">
          <img src={aiImage} alt="Taylor Burdgess" className="hero__avatar" />
          <div className="hero__ring hero__ring--1" aria-hidden="true" />
          <div className="hero__ring hero__ring--2" aria-hidden="true" />
        </div>
      </section>

    </main>
  );
};

export default Home;
