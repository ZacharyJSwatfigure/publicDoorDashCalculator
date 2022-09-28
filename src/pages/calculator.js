import { useState, useEffect } from "react";

export default function Calculator() {
  const [earnedAmount, setEarnedAmount] = useState(0);
  const [mpg, setMpg] = useState(0);
  const [milesDriven, setMilesDriven] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [timeDashing, setTimeDashing] = useState(0);

  return (
    <div>
      <section className="holder">
        <div>
          <input type="number"></input>
          <input type="number"></input>
          <input type="number"></input>
          <input type="number"></input>
          <input type="number"></input>
        </div>
      </section>
    </div>
  );
}
