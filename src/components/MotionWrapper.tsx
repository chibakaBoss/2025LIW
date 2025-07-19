'use client';

import dynamic from 'next/dynamic';
import type { HTMLMotionProps } from 'framer-motion';

const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);

interface MotionWrapperProps extends HTMLMotionProps<'div'> {}

export function MotionWrapper({ children, ...props }: MotionWrapperProps) {
  return <MotionDiv {...props}>{children}</MotionDiv>;
}
