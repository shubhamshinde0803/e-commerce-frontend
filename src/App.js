import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <Navigation />
      <HomePage />
      <h1 className="text-7xl text-center text-blue-400">Hello world</h1>
    </div>
  );
}

export default App;
