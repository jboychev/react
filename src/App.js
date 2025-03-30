
import "./App.css";
import Counter from "./Components/counter";
import Card from "./Components/Card";
import  Btn from "./Components/Btn";
import handleClick from "./Components/randomHandler";

// function Header() {
//   return <h1>Hello React</h1>;
// }

const randNum = () => Math.floor(Math.random() * 100);

function App() {
  return (
    <div>
      <div className="appWrapper">
        <h1 className="reactHeadline">Hello React</h1>
        <Counter />
      </div>
    
      <div className="appWrapper">
        <Card num={randNum()} />
        <Card num={randNum()} />
        <Card num={randNum()} />
      </div>
      <Btn />
      <p>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </p>
    </div>
  );
  
}

export default App;
