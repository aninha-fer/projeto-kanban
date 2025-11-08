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
        <div className="flex flex-col items-center m-5 rounded-md w-80 border-2 border-gray-100 min-h-120">
            <div className={`${props.corFundo} ${props.corTitulo} w-full h-10 font-bold p-1 rounded-t-md mb-3 flex items-center justify-between`}>
                <p>{props.step}</p>
                <div className={`${props.corCirculo} flex justify-center items-center rounded-full h-7 w-7`}>
                    <p>{props.cards.length}</p>
                </div>
            </div>
            <div className="w-fit">
                {listaTasks}
                {/* <Tarefas id={1} titulo={"task.title"} descricao={"task.description"}/> */}
                
            </div>
        </div>
    )
}