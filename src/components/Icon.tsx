import React from 'react';

type Props = {
  svg: string;
  className: string;
}

const Icon: React.FC<Props> = ({ svg, className }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{
      __html: svg
    }} />
  )
}

export default Icon