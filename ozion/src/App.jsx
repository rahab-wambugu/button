import {useState} from "react";


export default function counter(){
  const [count, setCount] = useState(0);

  return(
    <div> 
      <p>Current count:{count}</p>
      <button onClick={()=> setCount(count+1)}>increment</button>
    
      <p>Current count:{count}</p>
      <button onClick={()=> setCount(count-1)}>decrement</button>
    </div>
  )
};
