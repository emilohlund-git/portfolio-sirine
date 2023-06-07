import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col">
      {children}
    </div>
  )
}

export default Grid