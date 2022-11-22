import { useState } from "react";
function Counter() {
    const[count, setCount]  = useState(1); 
    const[delta,setDelta] = useState(1);
    function incr(){ 
      setCount(
        function(oldCount){
          return oldCount + delta
        }
      )
    }   
    function Res(){ 
      setCount(
        function(oldCount){
          oldCount = 0;
          return oldCount
        }
      )
    }   
    function hendeleDelta(e){
      console.log(e)
      setDelta(Number(e.target.value)

    }
  return (
    <div>
      <h1>Counter</h1>
      <input type = "number" value={delta} onChange={hendeleDelta}/>
    <p>Counter is at {count}</p>
    
    <button onClick={incr}>Click to add {delta} </button>
    <button onClick={Res}>  Reset  </button>
    </div>
   
  
  ); 
}

export default Counter;