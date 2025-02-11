import { useRef, useState } from 'react';

export default function Timer() {
  const [now, setNow] = useState(null);
  const [start, setStart] = useState(null);
  const timerRef = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    timerRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleClear = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h1>Timer: {now - start} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
