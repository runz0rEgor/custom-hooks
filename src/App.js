import React, { useRef } from 'react';
import Hover from './components/Hover';
import { List } from './components/List';
import useHover from './hooks/useHover';

function App() {
  const ref = useRef();
  const isYellowHovering = useHover(ref);
  return (
    <div>
      <List />
      <Hover />
      <div ref={ref} style={{ width: isYellowHovering ? 400 : 200, height: 300, background: isYellowHovering ? 'yellow' : 'pink' }}></div>
    </div>
  );
}

export default App;
