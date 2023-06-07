import { ReactNode } from 'react';

type Props = {
  type: 'a' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  children?: ReactNode;
  html?: string | InnerHTML;
  style?: React.CSSProperties;
}

const Typography: React.FC<Props> = ({ type, className, children, html, style }) => {
  const getStyles = () => {
    switch (type) {
      case 'a': return <a style={{
        ...style
      }} className={`${className}`}>{children}</a>;
      case 'p': {
        if (html) {
          return <p style={{
            ...style
          }} dangerouslySetInnerHTML={{ __html: html }} className={`text-[1.5rem] text-left lg:text-[1.5rem] font-extralight ${className}`} />;
        } else {
          return <p
            className={`text-[1.5rem] text-left lg:text-[1.5rem] font-extralight ${className}`}>
            {children}
          </p>
        }
      }
      case 'h1': return <h1 style={{
        ...style
      }} className={`text-[3em] font-bold ${className}`}>{children}</h1>;
      case 'h2': return <h2 style={{
        ...style
      }} className={`text-[2.0em] font-semibold ${className}`}>{children}</h2>;
      case 'h3': return <h3 style={{
        ...style
      }} className={`text-[1.7em] font-normal ${className}`}>{children}</h3>;
      case 'h4': return <h4 style={{
        ...style
      }} className={`${className}`}>{children}</h4>;
    }
  }

  return (
    getStyles()
  )
}

export default Typography