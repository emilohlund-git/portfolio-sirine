import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="bg-[#FFFCF9] text-[#2F2F2F]">
      <div className="flex justify-between p-6 fixed w-full">
        <div className="text-2xl flex gap-4">
          <Link className={`${location.pathname === "/" && !location.hash.includes('#contact') && 'font-bold'}`} to="/">Home</Link>
          <Link onClick={() => {
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }} className={`${location.hash.includes('#contact') && 'font-bold'}`} to="#contact">Contact</Link>
        </div>
        <img height={40} width={40} src="/images/linkedin-icon.svg" />
      </div>
      {children}
    </div>
  )
}

export default Layout