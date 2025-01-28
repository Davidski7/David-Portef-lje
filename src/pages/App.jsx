import { Link } from "react-router-dom";
import "../style/main.scss";


export default function Home() {
  return (
    <div>
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

      <header className="home-header">
        <div>
          <h1>Velkommen til Min Portefølje</h1>
          <p>Udforsk mine projekter og lær mere om mig</p>
        </div>
      </header>

      <section className="home-section">
        <div>
          <h2>Hvem er jeg</h2>
          <p>
            Jeg er en webudvikler med erfaring inden for design og programmering. 
            Tag et kig på mine projekter på næste side!
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Min Portefølje. Alle rettigheder forbeholdes.</p>
      </footer>
    </div>
  );
}
