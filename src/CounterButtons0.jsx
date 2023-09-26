import { useState } from "react";

// *  REACT DOCS EXAMPLE (button reset on key change)
export default function ButtonSet0() {
  console.log("render button set");

  const [reset, setReset] = useState(true);
  
  return (
    <div>
      <Button key={[1, reset]} />
      <Button key={[2, reset]} />
      <Button key={[3, reset]} />
      <ResetButton reset={reset} setReset={setReset} />
    </div>
  );
}

function Button() {
  console.log("render button");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function ResetButton({ reset, setReset }) {
  console.log("render reset button");

  const handleClick = () => {
    setReset(!reset);
  };

  return <button onClick={handleClick}>Reset</button>;
}
