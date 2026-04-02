import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { home } from "../../../data/config";
import "../styles/home.css";
import BouncyText from "../../../components/common/BouncyText";

const Home: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // Cursor blob follows the mouse. In "hover" state it expands and blends with
  // the background color to create a spotlight effect over the title letters.
  const variants = useMemo(
    () => ({
      default: {
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        opacity: 0,
      },
      hover: {
        x: `calc(${mousePosition.x}px - 5vw)`,
        y: `calc(${mousePosition.y}px - 5vw)`,
        height: "10vw",
        width: "10vw",
        backgroundColor: "var(--color-blend)",
        opacity: 1,
      },
    }),
    [mousePosition]
  );

  const enterTitle = useCallback(() => setCursorVariant("hover"), []);
  const leaveTitle = useCallback(() => setCursorVariant("default"), []);

  // Split once — home.title is static config data
  const title = useMemo(() => home.title.split(""), []);

  // Cycle through each role: type → pause → delete → next
  const typeWriterInit = useCallback((typewriter: TypewriterClass) => {
    home.subtitles.forEach((role) => {
      typewriter = typewriter
        .typeString(role)
        .pauseFor(1500)
        .deleteChars(role.length);
    });
    typewriter.start();
  }, []);

  return (
    <div id="home">
      <div id="title">
        <span onMouseEnter={enterTitle} onMouseLeave={leaveTitle}>
          {title.map((letter, index) => (
            <BouncyText key={index}>
              {letter === " " ? "\u00A0" : letter}
            </BouncyText>
          ))}
        </span>
      </div>

      <div id="current-work">
        <span className="pulse-dot" />
        Currently building&nbsp;<strong>{home.currentlyWorkingOn}</strong>
      </div>

      <div id="subtitle">
        <Typewriter
          onInit={typeWriterInit}
          options={{ autoStart: true, loop: true, deleteSpeed: 2 }}
        />
      </div>

      <div id="cta">
        <Button
          variant="outlined"
          className="ctaButton"
          onClick={() => navigate("/experiences")}
        >
          View my work
        </Button>
      </div>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default Home;
