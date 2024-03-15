import { useEffect, useState } from 'react'
import './App.css'
import ComponentA from './componets/ComponentA';
import ComponetB from './componets/ComponetB';
import ComponetC from './componets/ComponetC';


function App() {
  const [counter, setCounter] = useState(1)
  const [counterC, setCounterC] = useState(1);
  useEffect(() => {
    setCounter(counterC);
  }, [counterC])

  return (
    <>
    <ComponentA counter={counter}/>
    <ComponetB counter={counter} setCounter={setCounter}/>
    <ComponetC counterAB={counter} counterC={counterC} setCounter={setCounterC} />
    </>
  )
}

export default App
