import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = ({ 
  strings, 
  typeSpeed = 50, 
  loop = false, 
  className = "" 
}) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: strings,
      typeSpeed: typeSpeed,
      loop: loop,
      showCursor: true, // Optional: hide cursor if not needed
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, [strings, typeSpeed, loop]);

  return (
    <span 
      className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#027af3] to-[#01f2fa] ${className}`}
    >
      <span ref={typedRef}></span>
    </span>
  );
};

export default TypedComponent;
