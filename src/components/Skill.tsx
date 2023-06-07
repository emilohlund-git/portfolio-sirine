import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import Typography from './Typography';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
}

const Skill: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <motion.div className=" text-[#736B5E] flex flex-col text-center justify-center items-center lg:justify-start lg:items-start lg:text-left gap-y-4">
      {icon}
      <Typography type="h2">{title}</Typography>
      <Typography type="p" className="text-center lg:text-left">{description}</Typography>
    </motion.div >
  )
}

export default Skill