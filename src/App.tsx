import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  function quandoInicia() {
    fetch('https://pacaro-tarefas.netlify.app/api/ana-ferreira/tasks');
    console.log('eai');
  }

  useEffect(quandoInicia, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

