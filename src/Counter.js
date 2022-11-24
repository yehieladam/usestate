import { useState } from "react";
function Counter(props) {
  
  const{limit} = props; 
  const{delta} = props; 
  const[count, setCount]  = useState(1); 

  function incr(){ 
      setCount(
        function(oldCount){
          if (oldCount + delta>limit){
            setCount(0)
          } 
            else{
              return oldCount + delta

            }
            
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
    <button onClick={incr}>Click to add {delta} </button>
    <button onClick={Res}>  Reset  </button>
    </div>
   
  
  ); 
}

export default Counter;