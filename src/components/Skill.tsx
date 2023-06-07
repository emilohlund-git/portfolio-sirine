import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
}

const Skill: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <motion.div className=" text-[#736B5E] flex flex-col text-center justify-center items-center lg:justify-start lg:items-start lg:text-left gap-y-4">
      {icon}
      <h2 className="text-[2rem]">{title}</h2>
      <p className="font-extralight md:w-full">{description}</p>
    </motion.div>
  )
}

export default Skill