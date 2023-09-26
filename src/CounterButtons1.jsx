import { useState } from "react";

// *  CENTRALIZE STATE IN 2D ARRAY EXAMPLE
export default function ButtonSet1() {
  //  const [cnt0, setCnt0] = useState(0);
  //  const [cnt1, setCnt1] = useState(0);
  //  const [cntN, setCntN] = useState(0);
  const stateArr = [useState(0), useState(0), useState(0)];
  console.log(stateArr);

  return (
    <>
      <Button count={stateArr[0][0]} setCount={stateArr[0][1]} />
      <Button count={stateArr[1][0]} setCount={stateArr[1][1]} />
      <Button count={stateArr[2][0]} setCount={stateArr[2][1]} />
      <ResetButton stateArr={stateArr} />
    </>
  );
}

// ? Put all button states in one array to pass inbetween?
// ? What if I want to add unlimited buttons?
// ? Most effective state management data structure
// ? (built-in React state object?)

function Button({ count, setCount }) {
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        // console.log(stateArr);
      }}
    >
      Count: {count}
    </button>
  );
}

function ResetButton({ stateArr }) {
  function rst() {
    stateArr[0][1](0);
    stateArr[1][1](0);
    stateArr[2][1](0);
    console.log(stateArr);
  }
  return <button onClick={rst}>Reset</button>;
}
