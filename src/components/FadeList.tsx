import React from 'react';
import FadeIn from './FadeIn';

type Props = {
  list: string[];
  title: string;
  titleBackground: string;
  fadingBackground: string;
}

const FadeList: React.FC<Props> = ({ list, title, titleBackground, fadingBackground }) => {
  return (
    <FadeIn>
      <div className="flex flex-wrap flex-col lg:flex-row text-center lg:text-left">
        <div
          className="flex items-center pl-4"
          style={{
            backgroundColor: `${titleBackground}`
          }}><p className="text-[1.5rem] lg:text-[2em] font-semibold px-3 opacity-80 lg:w-56 py-4 lg:py-0">{title}</p></div>
        {list.map((role, index) => {
          const maxOpacity = list.length;
          const opacity = (maxOpacity - index) / maxOpacity;
          return <FadeIn key={role + index} delay={index / 10}><div style={{
            backgroundColor: `rgba(${fadingBackground},${opacity})`
          }}><p className="text-[1.5rem] lg:text-[2em] font-extralight px-3 opacity-50 py-4">{role}</p></div></FadeIn>
        })}
      </div>
    </FadeIn>
  )
}

export default FadeList