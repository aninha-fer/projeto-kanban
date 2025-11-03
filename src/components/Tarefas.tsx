type TarefasProps= {
    id: number;
    titulo: string;
    descricao: string;
}

export default function Tarefas(props:TarefasProps) {
    
    return (
        // <a onClick={}>
            <div id="box" className="border-1 border-gray-100 shadow-md w-70 mb-2 rounded-md p-2">
                <p>#{props.id}</p>
                <p>{props.titulo}</p>
                <p>{props.descricao}</p>
                <div className="flex justify-between m-1">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>
        // </a>
    )
}