import './App.css';
import { useState } from "react";
import Counter from './Counter';



function App() {
 
    const[delta,setDelta] = useState(1);
    const[Max,setMax] = useState(1);
    const[Res,setReset] = useState(false);
    const [highest, sethighest] =useState(1)


  

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

function saveHighest(high){
        sethighest(high)    
      }

  return (
    <div className="App">
      Usestate
   
  <div className="box" >
  <p>Choose the maximum number for the counter is </p>
  <input type = "number" value={Max} onChange={hendeleMax}/> 

  <p> Counter should jump By </p>
  <input type = "number" value={delta} onChange={hendeleDelta}/>

  <p>Highest so far:</p>
  <p>{highest}</p>

  <Counter delta = {delta} Max ={Max} GetReset = {GetReset} needToreset={Res} saveHighest={saveHighest} highest ={highest}   />
  <Counter delta = {delta} Max ={Max} GetReset = {GetReset} needToreset={Res} saveHighest={saveHighest} highest ={highest} />
  </div>
    </div>
  );
}
export default App;
