"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-50 flex flex-col gap-3">
      
      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full shadow-lg text-white
                   bg-gradient-to-r from-[#932c85] to-[#3d2e71]
                   hover:opacity-90 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>

      {/* SCROLL TO BOTTOM */}
      <button
        onClick={scrollToBottom}
        className="p-3 rounded-full shadow-lg text-white
                   bg-gray-700 hover:bg-gray-800 transition"
        aria-label="Scroll to bottom"
      >
        <FaArrowDown size={16} />
      </button>

    </div>
  );
}
