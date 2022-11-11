import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState()

  function init() {
    fetch("/api/fact").then(resp => resp.json()).then(fact => setFact(fact.facts[0]))
  }

  useEffect(() => {init()}, [])

  if(!fact) {
    return <p>loading...</p>
  } else {
    return <div>
      <h3></h3>
      <p>{fact}</p>
      <button onclick={() => init()}></button>
    </div>
  }
}

export default App
