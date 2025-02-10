import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/background1.png?raw=true",
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/3.gif?raw=true",
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/1.gif?raw=trueg",
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/eyr.gif?raw=true",
];

const mobileImages = [
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/sp.jpg?raw=true",
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/3.gif?raw=true",
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/1.gif?raw=trueg",
  "https://github.com/abyss01701/portfolio/blob/main/Carousel/eyr.gif?raw=true",
];

export default function SwipeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      setActiveIndex((prev) => Math.min(prev + 1, images.length - 1));
    } else if (offset > 100 || velocity > 500) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    setIsDragging(false);
  };

  return (
    <div className="relative h-[90vh] lg:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-black -mb-10">
      {/* Draggable Carousel */}
      <motion.div
        className="flex w-full h-full cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -(images.length * window.innerWidth - window.innerWidth), right: 0 }} // Adjusted for overflow prevention
        animate={{ x: -activeIndex * window.innerWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            {/* Desktop image */}
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover pointer-events-none hidden sm:block"
              draggable="false"
            />
            {/* Mobile image */}
            <img
              src={mobileImages[index]}
              alt={`Mobile Slide ${index}`}
              className="w-full h-full object-cover pointer-events-none sm:hidden"
              draggable="false"
            />
          </div>
        ))}
      </motion.div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
