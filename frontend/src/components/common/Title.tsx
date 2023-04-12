import { FC, ReactNode } from 'react';
interface TitleProps {
  children: ReactNode;
  css?: string;
}

const Title: FC<TitleProps> = ({ css, children }) => {
  return (
    <h1 className={css}>
      {children}
    </h1>
  )
}

export default Title;