import { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const inputRef1 = useRef<HTMLInputElement | null>(null);
  const inputRef2 = useRef<HTMLInputElement | null>(null);
  const inputRef3 = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef1.current) return;

    inputRef1.current.onkeyup = (ev) => {
      if (ev.key === "Enter") {
        inputRef2.current?.focus();
      }
    };
  }, [inputRef1, inputRef2]);

  return (
    <div className="App">
      <input ref={inputRef1} placeholder="Input 1" />
      <input
        ref={inputRef2}
        placeholder="Input 2"
        onKeyUp={(ev) => {
          if (ev.key === "Enter") {
            inputRef3.current?.focus();
          }
        }}
      />
      <input ref={inputRef3} placeholder="Input 3" />

      <button
        onClick={() => {
          inputRef2.current?.focus();
        }}
      >
        Focar Input 2
      </button>
    </div>
  );
}

export default App;
