
import "./App.css";
import Counter from "./Components/counter";
import Card from "./Components/Card";

// function Header() {
//   return <h1>Hello React</h1>;
// }

const randNum = () => Math.floor(Math.random() * 100);

function App() {
  // return (
  //   <div className="appWrapper">
  //     <h1 className="reactHeadline">Hello React</h1>
  //     <Counter />
  //   </div>
  // );
  // return <Header />;

  return (
    <div className="appWrapper">
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />
    </div>
  )
}

export default App;
