function Header({score, bestScore}) {
  return(
    <>
        <h1 className="text-slate-200 text-4xl font-bold text-center mt-5">MEMORY CARD</h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white">Welcome to the My Game</h1>
          <p className="text-white text-center p-5">Click the kitten cards and make sure you don't click the same cards twice 🙂 <br />GoodLuck 😉</p> 
          <div className="score-board flex align-center justify-center gap-4 mt-5">   
            <p className="bg-slate-200 w-max p-3 rounded cursor-pointer text-lg">Current Score: {score}</p>
            <p className="bg-slate-200 w-max p-3 rounded cursor-pointer text-lg">Highest Score: {bestScore}🚀</p>
          </div>
        </div>
    </>
  )
}
export default Header