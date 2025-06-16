import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [advice, setAdvice] = useState("");

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      setCategory("Invalid");
      setAdvice("Please enter valid height and weight.");
      setBmi(null);
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const roundedBMI = calculatedBMI.toFixed(1);
    setBmi(roundedBMI);

    if (calculatedBMI < 18.5) {
      setCategory("Underweight 😟");
      setAdvice("Try to include more nutritious food in your diet.");
    } else if (calculatedBMI < 24.9) {
      setCategory("Normal 😊");
      setAdvice("Great job! Keep maintaining your healthy lifestyle.");
    } else if (calculatedBMI < 29.9) {
      setCategory("Overweight 😐");
      setAdvice("Consider more physical activity and healthy eating.");
    } else {
      setCategory("Obese 😥");
      setAdvice("Consult a doctor and consider lifestyle changes.");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setAdvice("");
  };

  const printReport = () => {
    window.print();
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      {/* Floating health icons */}
      <div className="floating-icons">
        <img src="/icons/heart.png" alt="heart" className="float-icon float1" />
        <img src="/icons/apple.png" alt="apple" className="float-icon float2" />
        <img src="/icons/dumbbell.png" alt="dumbbell" className="float-icon float3" />

      </div>

      <div className="input-section">
        <label>Weight (kg)</label>
        <input
          type="number"
          min="1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g. 60"
        />
        <label>Height (cm)</label>
        <input
          type="number"
          min="1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g. 170"
        />
      </div>

      <div className="buttons">
        <button onClick={calculateBMI}>Calculate</button>
        <button className="reset" onClick={resetForm}>
          Reset
        </button>
      </div>

      {bmi && (
        <>
          <div className={`result-box ${category.split(" ")[0].toLowerCase()}`}>
            <h2>Your BMI: {bmi}</h2>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Advice:</strong> {advice}
            </p>
          </div>
          <button onClick={printReport} className="print-btn">
            Print / Download Report
          </button>
        </>
      )}

      <div className="chart-section">
  <h3>Understand Your BMI</h3>
  <div style={{ textAlign: "center" }}>
    <img src="/bmi.webp" alt="BMI Chart" className="bmi-chart" />
  </div>
</div>

{/* Footer Section */}
<div className="footer">
  <h2>Asmit Prabhakar</h2>
  <p>
    <a href="mailto:asmitprabha@gmail.com" className="footer-link">
      asmitprabha@gmail.com
    </a>{" "}
    |{" "}
    <a
      href="https://www.linkedin.com/in/asmit-prabhakar-11a86128a"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      LinkedIn
    </a>{" "}
    |{" "}
    <a
      href="https://www.instagram.com/asmitprabhakar"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Instagram
    </a>
  </p>
  <p className="footer-desc">
    Passionate developer building user-friendly apps. Reach out for projects or collaborations!
  </p>
</div>
</div> 
  );
}

export default App;
