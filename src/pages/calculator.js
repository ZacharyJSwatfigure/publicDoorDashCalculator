import { useState, useEffect } from "react";

export default function Calculator() {
  const [earnedAmount, setEarnedAmount] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [milesDriven, setMilesDriven] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [timeDashing, setTimeDashing] = useState(0);

  useEffect(() => {});
  return (
    <div>
      <section className="holder">
        <div>
          <input
            value={earnedAmount}
            type="number"
            placeholder="Amount Earned"
          ></input>
          <input
            value={mpg}
            type="number"
            placeholder="Average Miles per Gallon"
          ></input>
          <input
            value={milesDriven}
            type="number"
            placeholder="Miles Driven during Shift"
          ></input>
          <input
            value={gasPrice}
            type="number"
            placeholder="Price of Gas per Gallon"
          ></input>
          <input
            value={timeDashing}
            type="number"
            placeholder="Total Time Dashing"
          ></input>
        </div>
      </section>
    </div>
  );
}
