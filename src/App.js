import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/counter";

function Header() {
  return <h1>Hello React</h1>;
}

function App() {
  // return (
  //   <div className="appWrapper">
  //     <h1 className="reactHeadline">Hello React</h1>
  //     <Counter />
  //   </div>
  // );
  return <Header />;
}

export default App;
