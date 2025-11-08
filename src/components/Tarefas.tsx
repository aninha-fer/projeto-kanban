type TarefasProps= {
    id: number;
    titulo: string;
    descricao: string;
}

export default function Tarefas(props:TarefasProps) {
    
    return (
        // <a onClick={}>
            <div id="box" className="border-1 bg-white rounded-md shadow p-3 mb-3 w-full sm:max-w-xs sm:w-auto">
                <p>#{props.id}</p>
                <p>{props.titulo}</p>
                <p>{props.descricao}</p>
                <div className="flex justify-between m-1">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>
        // </a>
    )
}