import { motion, useAnimationControls } from "framer-motion";
import { useCallback } from "react";

type Props = {
  children?: React.ReactNode;
};

// 6-keyframe rubber band scale sequence (vertical squash-and-stretch)
const RUBBER_BAND_FRAMES = [
  "scale3d(1,1,1)",
  "scale3d(1,.55,1)",
  "scale3d(1,1.25,1)",
  "scale3d(1,.85,1)",
  "scale3d(1,1.05,1)",
  "scale3d(1,1,1)",
];

const BouncyText: React.FC<Props> = ({ children }) => {
  const controls = useAnimationControls();

  const rubberBand = useCallback(() => {
    controls.start({ transform: RUBBER_BAND_FRAMES });
  }, [controls]);

  return (
    <motion.span
      animate={controls}
      onMouseOver={rubberBand}
    >
      {/* Inner drag container keeps the letter draggable but snaps back to origin */}
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {children}
      </motion.div>
    </motion.span>
  );
};

export default BouncyText;
