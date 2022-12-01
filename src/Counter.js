import { useState,useEffect } from "react";
function Counter(props) {
  
  const{delta,Max,GetReset,needToreset} = props; 
  const[count, setCount]  = useState(1); 

useEffect(()=>{
if(needToreset){
  setCount(0)
  GetReset(false)
}

},[needToreset,GetReset])


  function incr(){ 
      setCount(
        function(oldCount){
          if (oldCount + delta>Max){
            setCount(0)
          } 
            else{
              return oldCount + delta

            }
            
        }
      )
    }   
    function Res(){
      GetReset(true) 
     // setCount(0)
    }   
  
  return (
    <div>
    <h1>Counter</h1>
    <p>Counter is at {count}</p>
    <button onClick={incr}>Click to add {delta} </button>
    <button onClick={Res}>   Reset  </button>
    </div>
   
  
  ); 
}

export default Counter;