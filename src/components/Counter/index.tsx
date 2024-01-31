import { useState, useEffect, useRef } from "react";

interface CounterProps {
  onCounterMount: () => void;
  onCounterUnmount: () => void;
  onCounterUpdate: (count: number) => void;
  initalCount: number;
}

export const Counter: React.FC<CounterProps> = ({
  onCounterMount,
  onCounterUnmount,
  onCounterUpdate,
  initalCount,
}) => {
  const [count, setCount] = useState(initalCount);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      onCounterMount();
      isMounted.current = true;
    }

    return () => {
      onCounterUnmount();
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      if (count >= 10) {
        setCount(0);
      }
      onCounterUpdate(count);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
