import "./style.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator></TipCalculator>
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} setBill={setBill}></BillInput>
      <SelectedPercentage
        percentage={percentage1}
        setPercentage={setPercentage1}
      >
        How did you like the service?
      </SelectedPercentage>
      <SelectedPercentage
        percentage={percentage2}
        setPercentage={setPercentage2}
      >
        How did your friend like the service?
      </SelectedPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => Number(setBill(e.target.value))}
      />
    </div>
  );
}
function SelectedPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value={"0"}>Dissatisfied (0%)</option>
        <option value={"5"}>It was OK (5%)</option>
        <option value={"10"}>It was GOOD (10%)</option>
        <option value={"20"}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill} + ${tip} tip
    </h3>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
