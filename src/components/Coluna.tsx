import Tarefas from "./Tarefas";

type Tarefa = {
  id: number;
  title: string;
  description: string;
  step: string;
}

type ColunaProps= {
    step: string;
    corFundo: string;
    corCirculo: string;
    corTitulo: string;
    cards: Tarefa[];
}

export default function Coluna(props: ColunaProps) {
    const listaTasks = props.cards.map((task) => {
        return <Tarefas id={task.id} titulo={task.title} descricao={task.description}/>;
    });

    return (
        <div className="flex-shrink-0 flex flex-col items-center mx-2 sm:mx-5 my-4 rounded-md w-full sm:w-80 max-w-full border-2 border-gray-100 min-h-screen sm:min-h-[30rem]">
            <div className={`${props.corFundo} ${props.corTitulo} w-full h-10 font-bold p-1 rounded-t-md mb-3 flex items-center justify-between`}>
                <p>{props.step}</p>
                <div className={`${props.corCirculo} flex justify-center items-center rounded-full h-7 w-7`}>
                    <p>{props.cards.length}</p>
                </div>
            </div>
            <div className="w-full px-4 sm:px-2 pb-4 overflow-auto">
                {listaTasks}
                <Tarefas id={1} titulo={"task.title"} descricao={"task.description"}/>                
            </div>
        </div>
    )
}