import { motion } from "framer-motion";

interface SlideInAnimationProps {
  direction?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  className?: string; // Add className prop
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
  className = "", // Default to an empty string
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideInVariants(direction)}
    className={`rounded-lg text-center ${className}`} // Use className prop
  >
    {children}
  </motion.div>
);

export default SlideInAnimation;
