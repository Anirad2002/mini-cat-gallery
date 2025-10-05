import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="paw"></div>
      <div className="paw"></div>
      <div className="paw"></div>
      <p>Loading cats...</p>
    </div>
  );
}