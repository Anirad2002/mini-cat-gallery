import React from "react";
import "./CatGallery.css";

export default function CatGallery({ cats, onCatClick }) {
  return (
    <div className="cat-gallery">
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={cat.url}
          alt="Cat"
          className="cat-thumb"
          onClick={() => onCatClick(cat.url)}
        />
      ))}
    </div>
  );
}
