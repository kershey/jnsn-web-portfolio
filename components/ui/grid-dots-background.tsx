'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export const GridDots = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  const dots = React.useMemo(() => {
    const dots = [];
    const numRows = 11;
    const numCols = 11;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        dots.push(
          <div
            key={`${row}-${col}`}
            className={cn(
              'h-1 w-1 rounded-full bg-gray-200 dark:bg-gray-800',
              className
            )}
            style={{
              gridRow: row + 1,
              gridColumn: col + 1,
            }}
          />
        );
      }
    }
    return dots;
  }, [className]);

  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 grid h-full w-full grid-cols-[repeat(11,1fr)] grid-rows-[repeat(11,1fr)]',
        containerClassName
      )}
    >
      {dots}
    </div>
  );
};

export const GridDotBackground = ({
  children,
  className,
  containerClassName,
  dotClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dotClassName?: string;
}) => {
  return (
    <div className={cn('relative h-full w-full', className)}>
      <GridDots
        className={dotClassName}
        containerClassName={containerClassName}
      />
      {children}
    </div>
  );
};
