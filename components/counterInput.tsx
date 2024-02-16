"use client"
import React, { useState } from 'react';


function CounterInput() {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
  
    return (
      <div className='border-2 py-3 px-3 text-xl font-semibold rounded-md border-inherit			'>
        <button onClick={decrement} className='w-[20px]'>-</button>
        <span className='mx-2 w-[39px] text-center'>{count}</span>
        <button onClick={increment} className='w-[20px]'>+</button>
      </div>
    );
  }
  
  export default CounterInput;