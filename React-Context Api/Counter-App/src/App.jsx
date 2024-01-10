{/*Please See The context Component First */}
import './App.css'
import { useContext } from 'react'
import { CounterContext } from './context/CounterContext'
function App() {
  const CounterContextObject = useContext(CounterContext);
  

  return (
    <>
      <h1>{CounterContextObject.count}</h1>
      <button onClick={()=>{
        CounterContextObject.setcount(CounterContextObject.count+1);
      }}></button>
    </>
  )
}

export default App
