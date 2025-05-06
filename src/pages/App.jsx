import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../style/main.scss";

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__link" onClick={() => scrollToSection("home")}>
              Start
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__link" onClick={() => scrollToSection("projects")}>
              Projekter
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__link" onClick={() => scrollToSection("about")}>
              Om mig
            </button>
          </li>
          <p className="Emmail_item">davidsimonsen2006@gmail.com</p>
        </ul>
      </nav>

      <header id="home" className="home-header">
        <h1>Mit Portefølje</h1>
        <p>Udforsk mine projekter</p>
      </header>

      <section className="home-section">
        <h2>Hvem er jeg</h2>
        <p>
          Jeg er en webudvikler med erfaring inden for primært programmering.
          Tag et kig på mine projekter nedunder!
        </p>
        <img src="/unnamed.webp" alt="David" className="about-image" />
      </section>

      <section id="projects" className="projects">
        <h1 className="projects-header">Mine fede projekter</h1>
        <p className="projects-description">
          Her er alle mine projekter. Klik på et kort for at se mere!
        </p>

        <div className="project-grid">
          {[
            {
              title: "Poke API",
              desc: "Jeg har ved hjælp fra fetch fået de forskellige Pokemons ud samt information om hver enkel.",
              img: "/Skærmbillede 2024-10-23 143754.png",
              internalLink: "/pokeapi",
              link: "https://davidski7.github.io/Projekt1/",
            },
            {
              title: "Newsify",
              desc: "En App sat op med webpack hvor man kan logge ind, se nyheder og arkivere specifikke nyheder.",
              img: "/Skærmbillede 2025-01-27 090049.png",
              internalLink: "/newsify",
              link: "https://rts-cmk-wu12.github.io/newsify-Davidski7/",
            },
            {
              title: "My Movies",
              desc: "En React-app hvor man kan se nyeste film og detaljer om dem via et API.",
              img: "/Skærmbillede 2025-01-27 084347.png",
              internalLink: "/mymovies",
              externalLink: "https://projekt-moviez-davidski7.onrender.com/",
            },
            {
              title: "Din Mægler",
              desc: "En boligside hvor man kan se boliger, mæglerinfo og gemme favoritter efter login.",
              img: "/Skærmbillede 2025-03-10 085044.png",
              link: "https://maelger.onrender.com/",
            },
            {
              title: "Hifi Corner",
              desc: "En React-side lavet for Hifi Corner, hvor jeg selv har lavet et API til dataen.",
              img: "/Skærmbillede 2025-03-10 085549.png",
              link: "https://praktik-hifi-corner-med-react-jackz-og.onrender.com/",
            },
          ].map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-preview">
                {project.internalLink ? (
                  <Link to={project.internalLink}>
                    <img src={project.img} alt={`${project.title} billede`} />
                  </Link>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.img} alt={`${project.title} billede`} />
                  </a>
                )}
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <a href={project.externalLink || project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Se Projekt
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-page">
        <h1>Om Mig</h1>
        <p>Her kan du læse hvordan du kan kontakte mig og lidt af den erfaring som jeg har.</p>

        <section>
          <h2>Introduktion</h2>
          <p>
            Mit navn er David Alexander Simonsen, og jeg er en 18-årig dreng, som elsker at arbejde med computer. Jeg er Webudvikler og har lavet masser af projekter allerede både i helt normal js og html og i react og webpack.
          </p>
        </section>

        <section>
          <h2>Færdigheder og Erfaring</h2>
          <ul>
            <p>Jeg har primært arbejdet i Visual Studio Code</p>
            <p>Jeg har arbejdet med mange forskellige ting, men her er nogle af de ting, som jeg har arbejdet mest med:</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SCSS/SASS</li>
            <li>Webpack</li>
            <li>MongoDB</li>
            <li>React/Vite</li>
            <li>JSONServer</li>
            <li>Render.com</li>
            <li>GitHub</li>
            <li>Wordpress</li>
            <li>PHP</li>
          </ul>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>Email: <a href="mailto:davidsimonsen2006@gmail.com">davidsimonsen2006@gmail.com</a></p>
          <p>Telefonnummer:41208105</p>
        </section>
      </section>

      <footer className="footer">
        <p>© 2025 Min Portefølje. Alle rettigheder forbeholdes. <CiLinkedin /></p>
      </footer>
    </div>
  );
}
