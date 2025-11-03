import Tarefas from "./Tarefas";

type ColunaProps= {
    categoria: string;
    corFundo: string;
    corCirculo: string;
    corTitulo: string;
}

export default function Coluna(props: ColunaProps) {
    
    return (
        <div className="flex flex-col items-center m-5 rounded-md w-80 border-2 border-gray-100">
            <div className={`${props.corFundo} ${props.corTitulo} w-full h-10 font-bold p-1 rounded-t-md mb-3 flex items-center justify-between`}>
                <p>{props.categoria}</p>
                <div className={`${props.corCirculo} flex justify-center items-center rounded-full h-7 w-7`}>
                    <p>3</p>
                </div>
            </div>
            <div className="w-fit">
                <Tarefas id={1} titulo={"oi"} descricao={"oi"}/>
                <Tarefas id={2} titulo={"oi"} descricao={"oi"}/>
                <Tarefas id={3} titulo={"oi"} descricao={"oi"}/>
            </div>
        </div>
    )
}