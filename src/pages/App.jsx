import { CiLinkedin } from "react-icons/ci";
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
              Home
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__link" onClick={() => scrollToSection("projects")}>
              Projekter
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__link" onClick={() => scrollToSection("about")}>
              About Me
            </button>
          </li>
        </ul>
      </nav>


      <header id="home" className="home-header">
        <h1>Velkommen til Min Portefølje</h1>
        <p>Udforsk mine projekter og lær mere om mig</p>
      </header>

      <section className="home-section">
        <h2>Hvem er jeg</h2>
        <p>
          Jeg er en webudvikler med erfaring inden for design og programmering.
          Tag et kig på mine projekter på næste side!
        </p>

        <img src="/unnamed.webp" alt="David" className="about-image" />
      </section>


      <section id="projects" className="projects">
        <h1 className="projects-header">Mit Portfolio</h1>
        <p className="projects-description">
          Her er alle mine projekter. Klik på et kort for at se mere!
        </p>

        <div className="project-grid">
          {[
            {
              title: "Poke API",
              desc: "Jeg har ved hjælp fra fetch fået de forskellige Pokemons ud samt information om hver enkel.",
              img: "/Skærmbillede 2024-10-23 143754.png",
              link: "https://davidski7.github.io/Projekt1/",
            },
            {
              title: "Newsify",
              desc: "En App hvor man kan logge ind, se nyheder og arkivere specifikke nyheder.",
              img: "/Skærmbillede 2025-01-27 090049.png",
              link: "https://rts-cmk-wu12.github.io/newsify-Davidski7/",
            },
            {
              title: "My Movies",
              desc: "En React-app hvor man kan se nyeste film og detaljer om dem via et API.",
              img: "/Skærmbillede 2025-01-27 084347.png",
              link: "https://projekt-moviez-davidski7.onrender.com/",
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
                <img src={project.img} alt={`${project.title} billede`} />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Se Projekt
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section id="about" className="about-page">
        <h1>Om Mig</h1>
        <p>Her kan du lære mere om mig, min baggrund og hvordan du kan kontakte mig.</p>

        <section>
          <h2>Introduktion</h2>
          <p>Mit navn er David, og jeg er en 18-årig dreng, som elsker at arbejde med computer.</p>
        </section>

        <section>
          <h2>Uddannelse</h2>
          <ul>
            <li><strong>Uddannelse 1:</strong> Grundforløb 2 på Next København (2024).</li>
            <li><strong>Uddannelse 2:</strong> Hovedforløb på Roskilde Tekniske Skole (Nuværende).</li>
          </ul>
        </section>

        <section>
          <h2>Færdigheder og Erfaring</h2>
          <ul>
            <li>Jeg har primært arbejdet i Visual Studio Code</li>
            <li>Jeg har arbejdet med både Webpack og React</li>
          </ul>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>Email: <a href="mailto:davidsimonsen2006@gmail.com">davidsimonsen2006@gmail.com</a></p>
        </section>
      </section>


      <footer className="footer">
        <p>© 2025 Min Portefølje. Alle rettigheder forbeholdes. <CiLinkedin /></p>
      </footer>
    </div>
  );
}
