import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import EditarTarefa from "./EditarTarefa";
import { useEffect, useState } from "react";

type TarefasProps= {
    id: number;
    titulo: string;
    descricao: string;
    status: string;
    onUpdate?: (id:number, changes: Partial<{ step:string; title:string; description:string }>) => void;
}

export default function Tarefas(props:TarefasProps) {
    const [stepValue, setStepValue] = useState(props.status);
    useEffect(() => {
        setStepValue(props.status);
    }, [props.status]);

    async function updateStep(newStep: string) {
        const payload = { title: props.titulo, description: props.descricao, step: newStep };

        props.onUpdate?.(props.id, { step: newStep });

        try {
            const res = await fetch(`https://pacaro-tarefas.netlify.app/api/ana-ferreira/tasks/${props.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Erro ao atualizar tarefa");
            }

        } catch (err) {
            console.error(err);
            props.onUpdate?.(props.id, { step: props.status });
        }
    }

    function prevStep() {
        if (stepValue === "Em andamento") return "Para fazer";
        if (stepValue === "Pronto") return "Em andamento";
        return stepValue;
    }
    function nextStep() {
        if (stepValue === "Para fazer") return "Em andamento";
        if (stepValue === "Em andamento") return "Pronto";
        return stepValue;
    }

    return (
        <Dialog>
            <DialogTrigger className="w-full p-2">
                <div id="box" className="bg-white border-1 border-gray-200 rounded-md shadow p-3 w-full max-w-full sm:max-w-xs sm:w-auto box-border flex flex-col items-start text-left">
                    <div className="w-full">
                        <p className="text-xs text-gray-400">#{props.id}</p>
                        <p className="font-medium truncate">{props.titulo}</p>

                        <p className="text-sm text-gray-600 mt-2 " style={{lineHeight: '1.1rem', maxHeight: '3.3rem'}}>
                            {props.descricao}
                        </p>
                    </div>

                    <div className="flex justify-between mt-2 w-full">
                        <button
                            type="button"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={async (e) => {
                                e.stopPropagation();
                                const ns = prevStep();
                                if (ns !== stepValue) await updateStep(ns);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 hover:bg-gray-200 rounded-md">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={async (e) => {
                                e.stopPropagation();
                                const ns = nextStep();
                                if (ns !== stepValue) await updateStep(ns);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 hover:bg-gray-200 rounded-md ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </DialogTrigger>
            <EditarTarefa id={props.id} title={props.titulo} description={props.descricao} step={props.status}/>
        </Dialog>
    )
}
