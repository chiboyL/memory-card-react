function Header({score, bestScore}) {
  return(
    <>
        <h1 className="text-slate-200 text-4xl font-bold text-center mt-5">MEMORY CARD</h1>
        <div className="score-board flex align-center justify-center gap-4 mt-5">
            <p className="bg-slate-200 w-max p-3 rounded cursor-pointer text-lg">Current Score: {score}</p>
            <p className="bg-slate-200 w-max p-3 rounded cursor-pointer text-lg">Highest Score: {bestScore}</p>
        </div>
    </>
  )
}
export default Header