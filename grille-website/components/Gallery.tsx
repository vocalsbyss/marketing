"use client";// components/Gallery.tsx
import React from "react";

interface Image {
  src: string;
  title: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={img.src} alt={img.title} className="w-full h-auto" />
          <h3 className="mt-2 text-center font-medium">{img.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gallery;