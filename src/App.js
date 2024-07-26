import "./style.css"
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator></TipCalculator>
    </div>
  );
}
function TipCalculator() {
  return(
    <div>
    <BillInput></BillInput>
    <SelectedPercentage>How did you like the service?</SelectedPercentage>
    <SelectedPercentage>How did your friend like the service?</SelectedPercentage>
    <Output/>
    <Reset/>
  </div>
  )
}
function BillInput() {
  return(
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="bill value"/>
    </div>
  )
}
function SelectedPercentage({children}) {
  return(
    <div>
      <label>{children}</label>
      <select>
        <option value={"0"}>Dissatisfied (0%)</option>
        <option value={"5"}>It was OK (5%)</option>
        <option value={"10"}>It was GOOD (10%)</option>
        <option value={"20"}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}
function Output(){
  return(
    <h3>You pay X ($A + $B tip)</h3>
  )
}
function Reset(){
  return(
    <button>Reset</button>
  )
}
