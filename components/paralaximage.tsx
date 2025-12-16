import { useEffect, useState } from "react";

export default function ParallaxImage({ image }: { image: string }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset * 0.4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
        <h2 className="text-5xl font-bold">Travel Beyond Limits</h2>
      </div>
    </div>
  );
}
