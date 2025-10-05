import catIcon from './cat.svg';
import React, { useEffect, useState } from "react";
import { getCats } from "./services/CatService";
import CatGallery from "./components/CatGallery";
import CatModal from "./components/CatModal";
import Loader from "./components/Loader";
import "./App.css";

export default function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(null);

  const fetchCats = async () => {
    setLoading(true);
    try {
      const data = await getCats(9);
      setCats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = catIcon;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.type = "image/svg+xml";
      newLink.href = catIcon;
      document.head.appendChild(newLink);
    }
    
    fetchCats();
  }, []);

  return (
    <div className="app-container">
      <div className="cat-icon">🐱</div>
      <h1>Mini Galeria Kotów</h1>
      <p className="subtitle">Najlepsze zdjęcia futrzaków z całego świata 🌍</p>
      
      <button 
        className="refresh-btn" 
        onClick={fetchCats}
        disabled={loading}
      >
        <span className="btn-content">
          <span className="btn-icon">🔄</span>
          <span className="btn-text">Refresh cats</span>
        </span>
      </button>

      {loading ? (
        <Loader />
      ) : (
        <>
          <CatGallery cats={cats} onCatClick={setSelectedCat} />
          
          <div className="stats">
            <span className="stats-icon">😻</span>
            <span className="stats-text">
              {cats.length} wspaniałych kotów pobrano
            </span>
          </div>
        </>
      )}

      <CatModal imageUrl={selectedCat} onClose={() => setSelectedCat(null)} />
      
      <div className="footer">
        <p>Wykonane z 💜 dla miłośników kotów</p>
      </div>
    </div>
  );
}