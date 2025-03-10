import "../style/main.scss";
import { Link } from "react-router-dom";


export default function Projects() {
  return (
    <div>
      <header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/projects">Projekter</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/about">About Me</Link>
            </li>
          </ul>
        </nav>
        <h1 className="projects-header">Mit Portfolio</h1>
        <p className="projects-description">
          Her er alle mine projekter. Klik på et kort for at se mere!
        </p>
      </header>

      <section className="projects">

        <article className="project-card">
          <div className="project-preview">
            <img
              src="/Skærmbillede 2024-10-23 143754.png"
              alt="Projekt 1 billede"
            />
          </div>
          <div className="project-info">
            <h2>Poke API</h2>
            <p>
              Jeg har ved hjælp fra fetch fået de forskellige Pokemons ud samt
              information om hver enkel.
            </p>
            <a
              href="https://davidski7.github.io/Projekt1/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se Projekt
            </a>
          </div>
        </article>


        <article className="project-card">
          <div className="project-preview">
            <img
              src="/Skærmbillede 2025-01-27 090049.png"
              alt="Projekt 2 billede"
            />
          </div>
          <div className="project-info">
            <h2>Newsify</h2>
            <p>
              Det her er en opgave hvor jeg skulle lave en App hvor man kunne
              login og se de nyeste nyheder samt Archivere specifike nyheder.
            </p>
            <a
              href="https://rts-cmk-wu12.github.io/newsify-Davidski7/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se Projekt
            </a>
          </div>
        </article>


        <article className="project-card">
          <div className="project-preview">
            <img
              src="/Skærmbillede 2025-01-27 084347.png"
              alt="Projekt 3 billede"
            />
          </div>
          <div className="project-info">
            <h2>My Movies</h2>
            <p>
              Den her opgave er lavet i React hvor jeg ved hjælp fra et film API
              skulle lave en App hvor man kunne se nyeste film og detaljer om de
              forskellige ting.
            </p>
            <a
              href="https://projekt-moviez-davidski7.onrender.com/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se Projekt
            </a>
          </div>
        </article>


        <article className="project-card">
          <div className="project-preview">
            <img
              src="/Skærmbillede 2025-03-10 085044.png"
              alt="Projekt 3 billede"
            />
          </div>
          <div className="project-info">
            <h2>Din Mægler</h2>
            <p>
              Den her opgave er lavet i React hvor jeg ved hjælp fra et API
              skulle lave en side hvor man kan se forskellige boliger og mægler plus lave noget login hvor man så kunne gøre de forskellige huse til favoriter.
            </p>
            <a
              href="https://maelger.onrender.com/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se Projekt
            </a>
          </div>
        </article>


        <article className="project-card">
          <div className="project-preview">
            <img
              src="/Skærmbillede 2025-03-10 085549.png"
              alt="Projekt 3 billede"
            />
          </div>
          <div className="project-info">
            <h2>Din Mægler</h2>
            <p>
              Den her opgave er lavet i React hvor jeg skulle designe en side for HIFICORNER hvor jeg selv skulle lave et slags API til dataen.
            </p>
            <a
              href="https://praktik-hifi-corner-med-react-jackz-og.onrender.com/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se Projekt
            </a>
          </div>
        </article>
      </section>

      <footer className="footer">
        <p>© 2024 Mit Portfolio - Alle rettigheder forbeholdt</p>
      </footer>
    </div>
  );
}
