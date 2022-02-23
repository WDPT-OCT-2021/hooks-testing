import logo from "./logo.svg";
import "./App.css";
import CountClass from "./components/CountClass";
import CountHook from "./components/CountHook";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="App">
      <CountClass />
      <CountHook />
      <Colors />
    </div>
  );
}

export default App;
