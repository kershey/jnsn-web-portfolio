'use client';

import { cn } from '@/lib/utils';
import { motion, useAnimate, useInView } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string | ReactNode;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimating) {
      const animateText = async () => {
        setIsAnimating(true);

        while (true) {
          // Show text one by one
          const elements = scope.current.querySelectorAll('.typewriter-char');

          // First hide all
          for (const element of elements) {
            element.style.opacity = '0';
            element.style.display = 'none';
          }

          // Then show one by one
          for (const element of elements) {
            element.style.display = 'inline-block';
            await animate(element, { opacity: 1 }, { duration: 0.3 });
            // Add a longer delay between each character
            await new Promise((resolve) => setTimeout(resolve, 150));
          }

          // Keep visible for longer
          await new Promise((resolve) => setTimeout(resolve, 4000));

          // Hide from end to start
          for (let i = elements.length - 1; i >= 0; i--) {
            await animate(elements[i], { opacity: 0 }, { duration: 0.2 });
            await new Promise((resolve) => setTimeout(resolve, 50));
          }

          // Longer pause before next iteration
          await new Promise((resolve) => setTimeout(resolve, 1500));
        }
      };

      animateText();
    }

    return () => setIsAnimating(false);
  }, [isInView, animate, isAnimating, scope]);

  const renderWords = () => {
    return (
      <div ref={scope} className="inline">
        {words.map((word, idx) => {
          if (typeof word.text === 'string') {
            return (
              <div key={`word-${idx}`} className="inline-block">
                {word.text.split('').map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn('typewriter-char', word.className)}
                    style={{ opacity: 0, display: 'none' }}
                  >
                    {char}
                  </span>
                ))}
                &nbsp;
              </div>
            );
          } else {
            return (
              <span
                key={`word-${idx}`}
                className={cn('typewriter-char inline-block', word.className)}
                style={{ opacity: 0, display: 'none' }}
              >
                {word.text}
              </span>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center',
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
