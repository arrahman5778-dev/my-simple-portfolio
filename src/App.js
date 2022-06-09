import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  </div>;
}

export default App;
