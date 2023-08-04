import React, {useState, useEffect, useRef} from 'react';
import './App.css'

function App() {
  // counter state variable to be updated when increment and decrement buttons are clicked
  const [counter, setCounter] = useState<number>(0)

  // To reference buttons elements 
  const incrementRef = useRef<HTMLButtonElement>(null)
  const decrementRef = useRef<HTMLButtonElement>(null)


  // This effect updates the document title when the counter dependency changes
  useEffect(() => {
    document.title = `Counter value => ${counter}`
    
  }, [counter])

  // function to handle increment the counter 
  // focus after increment the counter
  const handleIncrement = ():void  => {
    setCounter(c => c + 1)
    incrementRef.current?.focus()
  }
  
  // function to handle increment the counter 
  // focus after decrement the counter
  const handleDecrement = ():void  => {
    setCounter(c => c - 1)
    incrementRef.current?.focus()
  }
  

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1 className='counter' >{counter}</h1>
      <div className="buttons">

        <button onClick={handleIncrement} ref={incrementRef} className="btn">Increment</button>
        <button onClick={handleDecrement} ref={decrementRef} className="btn">Decrement</button>

      </div>
      
    </div>
  );
}

export default App;
