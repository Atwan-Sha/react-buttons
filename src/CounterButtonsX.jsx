import { useState } from "react";

// *  FINAL WORKING VERSION
export default function ButtonSetX() {
  console.log("render button set");
  const [reset, setReset] = useState(true);
  const handleReset = () => {setReset(!reset)}

  const buttonLabels = [
    ["B1", "green"],
    ["B2", "yellow"],
    ["B3", "red"],
    ["B4", "cyan"],
    ["B5", "magenta"]
  ];

  return (
    <div className="button-set">
      {buttonLabels.map((label, index) => (
        <Button key={[index, reset]} label={label[0]} color={label[1]} />
      ))}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Button({ label, color }) {
  console.log("render button");
  const [count, setCount] = useState(0);
  const barHeight = (cnt) => (cnt * 50).toString() + "px";
  const handleClick = () => {setCount(count + 1)}

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
