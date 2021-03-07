import React, { useRef } from 'react';
import useHover from '../hooks/useHover';

export default function Hover() {
  const ref = useRef();
  const isHovering = useHover(ref);

  console.log(isHovering);
  return (
    <div ref={ref} style={{ width: isHovering ? 400 : 200, height: 300, background: isHovering ? 'red' : 'green' }}>

    </div>
  )
}