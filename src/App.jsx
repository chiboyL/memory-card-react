import { useState } from 'react';
import './App.css'
import Gameboard from './components/Gameboard'
import Header from './components/Header'



function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return(
    <div>
      <Header score={score} bestScore={bestScore}/>
      <Gameboard 
        score={score} 
        setScore={setScore} 
        bestScore={bestScore} 
        setBestScore={setBestScore}
      />
    </div>
  )
}

export default App
