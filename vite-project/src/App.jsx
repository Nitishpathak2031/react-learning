import React, { useRef } from 'react';

function App() {
  const h1Ref = useRef(null);

  const handler = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'black';
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 ref={h1Ref}>Hello</h1>
      <button onClick={handler}>Change Color</button>
    </div>
  );
}

export default App;
