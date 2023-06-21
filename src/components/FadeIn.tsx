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
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: .3,
        delay: delay
      }}
    >{children}</motion.div>
  )
}

export default FadeIn