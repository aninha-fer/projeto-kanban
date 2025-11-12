import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  const [tasks, setTasks] = useState([]);

  async function carregaTarefas() {
    const resposta = await fetch(
      "https://pacaro-tarefas.netlify.app/api/ana-ferreira/tasks"
    );
    const tarefas = await resposta.json();
    setTasks(tarefas);
  }

  useEffect(() => {
    carregaTarefas();
  }, []);

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home itens = {tasks}/>}/>
      </Routes>
    </div>
  );
}