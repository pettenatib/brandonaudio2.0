import React from "react";
import "./Banner.css";

export default function Banner({ images }) {
  return (
    <div className="image-banner">
      <div className="banner-grid">
        {images.slice(0, 6).map((src, index) => (
          <img key={index} src={src} alt={`banner-${index}`} />
        ))}
      </div>
    </div>
  );
}