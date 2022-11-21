import { useState } from "react";
function Counter() {
    const[count, setCount]  = useState(1); 
    function incr(){ 
      setCount(
        function(oldCount){
          return oldCount +1
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
  return (
    <div>
      <h1>Counter</h1>
    <p>Counter is at {count}</p>
    
    <button onClick={incr}>Click to add 1 </button>
    <button onClick={Res}>  Reset  </button>
    </div>
   
  
  ); 
}

export default Counter;