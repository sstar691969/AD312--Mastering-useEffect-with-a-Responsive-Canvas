
import { useState, useEffect } from "react";

function ResponsiveCard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // An empty dependency array is used because the resize listener only needs
    // to be attached once when the component mounts. Without it, the effect
    // would run after every render and repeatedly register event listeners.
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: isMobile ? "#ffcccc" : "#cce5ff",
        textAlign: "center",
      }}
    >
      <h2>{isMobile ? "Mobile View" : "Desktop View"}</h2>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
}

export default ResponsiveCard;