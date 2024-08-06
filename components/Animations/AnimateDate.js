"use client";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function AnimateDate({ date }) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", stiffness: 100,duration: 0.2 }}
      className="absolute -top-2 -left-24 z-10"
    >
      {format(date, "dd MMM yy")}
    </motion.div>
  );
}
