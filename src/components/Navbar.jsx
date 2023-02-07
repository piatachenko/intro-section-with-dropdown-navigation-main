import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navRef}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      Navbar
    </div>
  );
};

export default Navbar;
