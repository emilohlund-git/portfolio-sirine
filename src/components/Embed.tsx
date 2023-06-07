import React from 'react';

type Props = {
  src?: string;
}

const Embed: React.FC<Props> = ({ src }) => {
  return (
    <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
      className="h-full w-full" src={src} allowFullScreen
      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
    />
  )
}

export default Embed