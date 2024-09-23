// components/SlideInAnimation.tsx
import { motion } from "framer-motion";

interface SlideInAnimationProps {
  direction?: "left" | "right";
  children: React.ReactNode;
}

const slideInVariants = (direction: "left" | "right" | "top" | "bottom") => ({
  hidden: {
    opacity: 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
});

const SlideInAnimation: React.FC<SlideInAnimationProps> = ({
  direction = "left",
  children,
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideInVariants(direction)}
    className="rounded-lg text-center"
  >
    {children}
  </motion.div>
);

export default SlideInAnimation;
