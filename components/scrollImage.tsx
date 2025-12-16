import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ScrollImage({ src, alt }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 ease-out
          ${visible ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
    </div>
  );
}
