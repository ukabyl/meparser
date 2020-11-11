import React, { useState, useRef } from 'react';
import { Canvas } from './canvas';

import './index.scss';

export const CustomParser: React.FC = () => {

  const [expression, setExpression] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSketch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputEl && inputEl.current) {
      setExpression(inputEl.current.value);
    }
  }

  return (
    <div className="custom-parser">
      <form onSubmit={handleSketch}>
        <input 
          type="text"
          required
          placeholder="Write your simple expression here like [x + 5 * (x / 2)] :)"
          ref={inputEl}
        />
        <button type="submit">Sketch</button>
      </form>
      <div className="coordinate">
        <Canvas expression={expression} />
      </div>
    </div>
  )
}
