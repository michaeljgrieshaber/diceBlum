import "./App.css";
import {useState} from "react"


function App() {
  const [number, setNumber]= useState("https://i.stack.imgur.com/jdLvX.gif")

  function roll() {
    let x = Math.floor(Math.random() * 6) + 1
      
    if (x === 1) {
      setNumber("https://imgur.com/a005G8C.png")
      console.log(x)
    } else if (x === 2) {
      setNumber("https://imgur.com/j9AlaxW.png")
      console.log(x)

    } else if (x === 3) {
      setNumber("https://imgur.com/IyAYTXb.png")
      console.log(x)

    } else if (x === 4) {
      setNumber("https://imgur.com/ecaqBPo.png")
      console.log(x)
      
    } else if (x === 5) {
      setNumber("https://imgur.com/RfPJMxb.png")
      console.log(x)

    } else if (x === 6) {
      setNumber("https://imgur.com/HmZcCX6.png")
      console.log(x)

    } else {
    }
  }

  // function refreshPage() {
  //   window.location.reload(false);
  // }


  return (
    <div className="App">
      <button onClick={() => { roll() }}>Roll Baby</button>
      <br></br>
      <img src={number} alt="dice 6" />

    </div>
  );
}

export default App;
