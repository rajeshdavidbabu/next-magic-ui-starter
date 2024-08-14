import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const Dock = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-900 px-4 pb-3"
    >
      {[...Array(6)].map((_, i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
};

const AppIcon = ({ mouseX }: { mouseX: any }) => {
  let [hovering, setHovering] = useState(false);

  let distance = useMotionValue(Infinity);
  let size = useSpring(distance, {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  });

  let width = useTransform(size, [20, 60], [40, 80]);
  let height = useTransform(size, [20, 60], [40, 80]);

  return (
    <motion.div
      style={{
        width,
        height,
        position: "relative",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: 12,
        }}
        whileHover={{
          backgroundColor: "#22c55e",
        }}
      />
    </motion.div>
  );
};

export default Dock;