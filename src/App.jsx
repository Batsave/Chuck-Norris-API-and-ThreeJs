
import './App.scss'
import Joke from  './joke';
import Three from  './three';
function App() {


  return (
    <main>
    <div className="homeSection">

    <div className="titleContainer">
          <p className="title0 title">Welcome</p>
          <p className="title1 title">to</p>
        </div>
        <div className="titleContainer">
          <p className="title2 title">Chuck</p>
          <p className="title3 title">Norris</p>
          <p className="title4 title">Jokes.</p>
        </div>
      <Joke className="titleContainer"/>
      
      </div>
      <Three className="canvas"/>
    </main>
  )
}

export default App
