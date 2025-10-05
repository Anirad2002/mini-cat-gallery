import React from "react";
import "./CatModal.css";

export default function CatModal({ imageUrl, onClose }) {
  if (!imageUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Big cat" />
        <button onClick={onClose} className="close-btn">✖</button>
      </div>
    </div>
  );
}