import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:animeId" element={<AnimeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;