import { useRef, useState } from "react";

export const Cronometro = () => {
  const [timer, setTimer] = useState(0);

  const intervalId = useRef<number>();

  function start() {
    intervalId.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalId.current);
  }

  return (
    <div>
      <p>Tempo atual: {timer}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
