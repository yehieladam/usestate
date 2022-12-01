import './App.css';
import { useState } from "react";
import Counter from './Counter';



function App() {
 
    const[delta,setDelta] = useState(1);
    const[Max,setMax] = useState(1);
    const[Res,setReset] = useState(false);


function hendeleMax(e){
      setMax(Number(e.target.value))
}

function GetReset(data){
  console.log(data)
  setReset(data)
}

function hendeleDelta(e){
        setDelta(Number(e.target.value))
        if(delta >= Max)
        setDelta("0")
      }
  

  return (
    <div className="App">
      Usestate
   
  <div className="box" >
  <p>Choose the maximum number for the counter is </p>
  <input type = "number" value={Max} onChange={hendeleMax}/> 

  <p> Counter should jump By </p>
  <input type = "number" value={delta} onChange={hendeleDelta}/>

  <Counter delta = {delta} Max ={Max} GetReset = {GetReset} needToreset={Res} />
  <Counter delta = {delta} Max ={Max} GetReset = {GetReset} needToreset={Res} />
  </div>
    </div>
  );
}
export default App;
