import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const TextGenerateEffect: React.FC<{
  words: string;
  threshold?: number;
}> = ({ words, threshold = 0.5 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {words.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextGenerateEffect;