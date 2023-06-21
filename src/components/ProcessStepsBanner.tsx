import React from 'react'
import { hexToRgbA } from '../utils/utils'
import FadeIn from './FadeIn'

type Props = {
  project: ProjectType
}

const ProcessStepsBanner: React.FC<Props> = ({ project }) => {
  return (
    <div
      className={`grid lg:grid-flow-col z-40`}>
      {project.processes.map((process, index) => {
        const maxOpacity = project.roles.length + 1;
        const opacity = (maxOpacity - index) / maxOpacity;
        return (
          <FadeIn key={process + index} delay={index / 10}>
            <div style={{
              backgroundColor: `rgba(${hexToRgbA(project.expand.colors.process_steps_color)},${opacity})`
            }} className="p-10">
              <span className="text-[4rem] font-bold opacity-10">0{index + 1}.</span>
              <p className="text-[2em] font-extralight opacity-50">{process}</p>
            </div>
          </FadeIn>
        )
      })}
    </div>
  )
}

export default ProcessStepsBanner