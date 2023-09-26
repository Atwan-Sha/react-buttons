import { useState, useEffect } from "react";

// *  CHATGPT INSPIRED EXAMPLE (with useEffect) (color bars added)
export default function ButtonSet2() {
  console.log("render ButtonSet");
  const buttonLabels = [
    ["B1", "green"],
    ["B2", "yellow"],
    ["B3", "red"],
  ];

  const [reset, setReset] = useState(false);
  const handleResetAll = () => {
    setReset(!reset);
  };

  return (
    <>
      {buttonLabels.map((label, index) => (
        <Button label={label[0]} color={label[1]} reset={reset} key={index} />
      ))}
      <button onClick={handleResetAll}>Reset All</button>
    </>
  );
}

function Button({ label, color, reset }) {
  console.log("render Button");
  const [count, setCount] = useState(0);

  const barHeight = (cnt) => (cnt * 50).toString() + "px";
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    handleReset();
    console.log("handle reset", reset);
  }, [reset]);

  return (
    <>
      <div
        className="bar"
        style={{
          backgroundColor: color,
          height: barHeight(count),
        }}
      ></div>
      <button onClick={handleClick}>
        {label} : {count}
      </button>
    </>
  );
}
