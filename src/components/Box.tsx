import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  size?: 'large' | 'small'
}

const Box: React.FC<Props> = ({ children, className, size = 'small' }) => {
  const getSize = () => {
    switch (size) {
      case 'large': return 'h-[80vh]';
      case 'small': return 'h-[50vh]';
    }
  }

  return (
    <div className={`w-full h-full p-28 lg:p-40 ${getSize()} ${className}`}>
      {children}
    </div>
  )
}

export default Box