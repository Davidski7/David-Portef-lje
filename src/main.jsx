import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/App.jsx";
import MyMovies from "./pages/mymovies.jsx";
import PokeAPI from "./pages/pokeapi.jsx";
import Newsify from "./pages/newsify.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mymovies" element={<MyMovies />} />
        <Route path="/pokeapi" element={<PokeAPI />} />
        <Route path="/newsify" element={<Newsify />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
