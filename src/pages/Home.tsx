import { useEffect, useState } from "react";
import Coluna from "../components/Coluna";
import Header from "../components/Header";
import relogio from "../assets/relogio.svg";
import exclamacao from "../assets/exclamacao.svg";
import check from "../assets/check.svg";
import type { Tarefa } from "../types";

export default function Home() {
  const [tasks, setTasks] = useState<Tarefa[]>([]);

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

  const categoria1 = "Para fazer";
  const categoria2 = "Em andamento";
  const categoria3 = "Pronto";
  const tarefasParaFazer = tasks.filter((task) => task.step === categoria1);
  const tarefasEmAndamento = tasks.filter((task) => task.step === categoria2);
  const tarefasPronto = tasks.filter((task) => task.step === categoria3);

  function handleUpdateTask(id: number, changes: Partial<Tarefa>) {
    setTasks((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, ...changes } : tarefa
      )
    );
  }

  return (
    <div className="bg-gray-100 h-full min-h-screen">
      <Header />
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto gap-4 justify-start sm:justify-center">
            <Coluna
              step={categoria1}
              corFundo={"bg-red-100"}
              corCirculo={"bg-red-200"}
              corTitulo={"text-red-800"}
              cards={tarefasParaFazer}
              img={exclamacao}
              onUpdateTask={handleUpdateTask}
            />

            <Coluna
              step={categoria2}
              corFundo={"bg-yellow-100"}
              corCirculo={"bg-yellow-200"}
              corTitulo={"text-yellow-800"}
              cards={tarefasEmAndamento}
              img={relogio}
              onUpdateTask={handleUpdateTask}
            />

            <Coluna
              step={categoria3}
              corFundo={"bg-green-100"}
              corCirculo={"bg-green-200"}
              corTitulo={"text-green-800"}
              cards={tarefasPronto}
              img={check}
              onUpdateTask={handleUpdateTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
