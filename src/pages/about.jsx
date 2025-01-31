import "../style/about.scss";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
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

      <header>
        <h1>Om Mig</h1>
        <p>Her kan du lære mere om mig, min baggrund og hvordan du kan kontakte mig.</p>
      </header>

      <main>
    
        <section>
          <h2>Introduktion</h2>
          <p>Mit navn er David, og jeg er en 18-årig dreng, som elsker at arbejde med computer.</p>
        </section>

        
        <section>
          <h2>Uddannelse</h2>
          <ul>
            <li>
              <strong>Uddannelse 1:</strong> Grundforløb 2 på Next København (2024).
            </li>
            <li>
              <strong>Uddannelse 2:</strong> Hovedforløb på Roskilde Tekniske Skole (Nuværende).
            </li>
          </ul>
        </section>

     
        <section>
          <h2>Færdigheder og Erfaring</h2>
          <p>Her er mine primære færdigheder:</p>
          <ul>
            <li>Jeg har primært arbejdet i Visual Studio Code</li>
            <li>Jeg har arbejdet med både Webpack og React</li>
          </ul>
        </section>

        
        <section>
          <h2>Kontakt</h2>
          <p>Du er velkommen til at kontakte mig via følgende mail:</p>
          <ul>
            <li>
              <strong>Email:</strong> davidsimonsen2006@gmail.com
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 Mit Portfolio. Alle rettigheder forbeholdes.</p>
      </footer>
    </div>
  );
}
