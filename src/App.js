import React from 'react';
import useInput from './hooks/useInput';

function App() {
  const user = useInput('');

  return (
    <div>
      <input type='text' {...user} placeholder='user' />
      <button onClick={() => console.log(user.value)}>click</button>
    </div>
  );
}

export default App;
