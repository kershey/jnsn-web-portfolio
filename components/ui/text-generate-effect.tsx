'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const TextGenerateEffect = ({
  words,
  className = '',
}: {
  words: string;
  className?: string;
}) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const characters = words.split('').map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: complete ? 1 : 0,
        y: complete ? 0 : 10,
      }}
      transition={{
        duration: 0.2,
        delay: complete ? i * 0.1 : 0,
      }}
      className="inline-block"
    >
      {char}
    </motion.span>
  ));

  return (
    <div className={`${className}`}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{characters}</div>
      </div>
    </div>
  );
};
