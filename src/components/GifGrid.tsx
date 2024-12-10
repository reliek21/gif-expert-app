import { FC, ReactNode } from 'react';

interface GifGridProps {
  category: string;
}

export const GifGrid: FC<GifGridProps> = ({ category }): ReactNode => {
  return (
    <h3>{category}</h3>
  );
}
