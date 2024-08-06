"use client";
import { motion } from "framer-motion";

export default function AnimateContent({ children, className }, props) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", stiffness: 100, duration: 0.6 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
