import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Sinle from "./component/Sinle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Sinle/>} />

      </Routes>
    </>
  );
}

export default App;
