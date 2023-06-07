import { ReactNode } from 'react';

type Props = {
  type: 'a' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children?: ReactNode;
  html?: string | InnerHTML
}

const Typography: React.FC<Props> = ({ type, className, children, html }) => {
  const getStyles = () => {
    switch (type) {
      case 'a': return <a className={`${className}`}>{children}</a>;
      case 'p': {
        if (html) {
          return <p dangerouslySetInnerHTML={{ __html: html }} className={`text-[1.5rem] text-left lg:text-[1.5rem] font-extralight ${className}`} />;
        } else {
          return <p
            className={`text-[1.5rem] text-left lg:text-[1.5rem] font-extralight ${className}`}>
            {children}
          </p>
        }
      }
      case 'h1': return <h1 className={`text-[3em] font-bold ${className}`}>{children}</h1>;
      case 'h2': return <h2 className={`text-[2.0em] font-semibold ${className}`}>{children}</h2>;
      case 'h3': return <h3 className={`text-[1.7em] font-normal ${className}`}>{children}</h3>;
      case 'h4': return <h4 className={`${className}`}>{children}</h4>;
    }
  }

  return (
    getStyles()
  )
}

export default Typography