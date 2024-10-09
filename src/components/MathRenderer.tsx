import React from 'react';
import Latex from 'react-latex-next';

interface MathRendererProps {
  math: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ math }) => {
  return (
    <span className="inline-block max-w-full overflow-hidden">
      <Latex>{math}</Latex>
    </span>
  );
};

export default MathRenderer;
