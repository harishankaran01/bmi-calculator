import image from "./images/BMIimage.jpg"
import "./App.css";
import { useState } from "react";
function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setbmi ]=useState(null);
  const[bmiStatus,setbmiStatus ]=useState();
  const[error,seterror]=useState("")


  const calculatebmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setbmi(bmiValue.toFixed(3));
      if (bmiValue < 18.5) {
        setbmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setbmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setbmiStatus("Overweight");
      } else {
        setbmiStatus("Obese");
      }
    } else {
      setbmi(null);
      setbmiStatus("");
      seterror("Please enter Height && Weight");
    }
  };
  
   const cleardata =()=>{
    setHeight("");
    setWeight("");
    setbmi(null);
    setbmiStatus("");
   }

  return (
    <>
      <div className="bmi-calculator">
        <div className="outer-box">
          <img src={image}/>
        </div>
          <div className="content">
            <div className="icon">
            <img src="src/images/icon.png" />

            </div>
            <h1>BMI CALCULATOR</h1>
            {error &&<div className="error">{error}</div>}
            <div className="right-content">
              <label>HEIGHT(CM)</label>
              <input typr="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className="right-content">
              <label>WEIGHT(KG)</label>
              <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button onClick={calculatebmi}> GET RESULT</button>
            <button onClick={cleardata}> CLEAR DATA</button>          
              {bmi !==null && (
                <div className="result-container">
                  <p>Your BMI is: {bmi}</p>
                  <p>Status: {bmiStatus}</p>
                </div>
              )}
            
            
          </div>
        
      </div>
    </>
  )
}

export default App
