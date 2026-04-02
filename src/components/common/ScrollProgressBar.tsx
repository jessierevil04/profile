import { useEffect, useState } from "react";

/** Thin indigo progress bar fixed at the top of the viewport, tracking page scroll. */
const ScrollProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        backgroundColor: "var(--color-hover)",
        zIndex: 9999,
        borderRadius: "0 2px 2px 0",
        transition: "width 0.1s linear",
        pointerEvents: "none",
      }}
    />
  );
};

export default ScrollProgressBar;
