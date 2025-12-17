"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const galleryImages: GalleryImage[] = [
    { src: "/images/slide1.jpg", alt: "Resort Image 1" },
    { src: "/images/resort.jpg", alt: "Resort Image 2" },
    { src: "/images/slide2.avif", alt: "Resort Image 3" },
    { src: "/images/slide3.jpg", alt: "Resort Image 4" },
    { src: "/images/hotel.jpg", alt: "Resort Image 5" },
    { src: "/images/slide1.jpg", alt: "Resort Image 6" },
    { src: "/images/slide1.jpg", alt: "Resort Image 7" },
    { src: "/images/slide1.jpg", alt: "Resort Image 8" },
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Resort Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setIndex(idx)}
              >
                <div className="relative overflow-hidden bg-gray-200 aspect-square md:aspect-auto md:h-56">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                      Click to View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        index={index}
        slides={galleryImages.map((img) => ({ src: img.src }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        on={{
          view: ({ index: currentIndex }) => setIndex(currentIndex),
        }}
      />
    </>
  );
}
