import React, { useState } from 'react';
import Spinner from './Spinner';

type Props = {
  url?: string;
}

const FigmaPrototype: React.FC<Props> = ({ url }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full mt-36">
      <iframe onLoad={() => setLoading(false)} style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        className="h-[100vh] w-full" src={url + '&hide-ui=1'} allowFullScreen />
      {loading ?
        <div className="absolute w-full top-20 left-0">
          <Spinner />
        </div>
        : <></>}
    </div>
  )
}

export default FigmaPrototype