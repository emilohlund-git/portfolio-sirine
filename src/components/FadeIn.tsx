import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number
}

const FadeIn: React.FC<Props> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: .7,
        delay: delay
      }}
    >{children}</motion.div>
  )
}

export default FadeIn