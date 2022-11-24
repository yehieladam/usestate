import './App.css';
import { useState } from "react";
import Counter from './Counter';



function App() {

    const[delta,setDelta] = useState(1);
    const[limit,setLimit] = useState(1);

    function limitos(l){
      setLimit(Number(l.target.value))
}


    function hendeleDelta(e){
        setDelta(Number(e.target.value))
        if(delta >= limit)
        setDelta("0")
      }
  

  return (
    <div className="App">
      Usestate
   
  <div className="box" >
  <p>Choose the maximum number for the counter is </p>
  <input type = "number" value={limit} onChange={limitos}/> 
    
  <p> Counter should jump By </p><input type = "number" value={delta} onChange={hendeleDelta}/>

  <Counter delta = {delta} limit ={limit} />
  <Counter delta = {delta} limit ={limit} />

  </div>
    </div>
  );
}
export default App;
