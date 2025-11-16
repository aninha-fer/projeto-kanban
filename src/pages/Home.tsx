import { useEffect, useState } from "react";
import Coluna from "../components/Coluna";
import Header from "../components/Header";

type Tarefa = {
  id: number;
  title: string;
  description: string;
  step: string;
}

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
  const tarefasParaFazer = tasks.filter(task => task.step === categoria1);
  const tarefasEmAndamento = tasks.filter(task => task.step === categoria2);
  const tarefasPronto = tasks.filter(task => task.step === categoria3);

  return (
          <div className="bg-gray-100">
            <Header/>
            <div className="px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex overflow-x-auto gap-4 justify-start sm:justify-center">
                    <Coluna step={categoria1} corFundo={"bg-red-100"} corCirculo={"bg-red-200"} corTitulo={"text-red-800"} cards={tarefasParaFazer}/>
                    <Coluna step={categoria2} corFundo={"bg-yellow-100"}  corCirculo={"bg-yellow-200"} corTitulo={"text-yellow-800"} cards={tarefasEmAndamento}/>
                    <Coluna step={categoria3} corFundo={"bg-green-100"} corCirculo={"bg-green-200"} corTitulo={"text-green-800"} cards={tarefasPronto}/>
                </div>
              </div>
            </div>
        </div>
    );
}