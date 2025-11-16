import React, { useEffect, useState } from "react";
import Dropdown, { type DropdownOption } from "./Dropdown"
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
  } from "./ui/dialog"

type EditarTarefaProps = {
    id: number;
    title: string;
    description: string;
    step: string;
}

export default function EditarTarefa(props : EditarTarefaProps) {
    const options: DropdownOption[] = [
        { value: 'Para fazer', label: 'Para fazer' },
        { value: 'Em andamento', label: 'Em andamento' },
        { value: 'Pronto', label: 'Pronto' }
    ];
    const [selectedItem, setSelectedItem] = useState<string | number | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        // sincroniza o estado local com as props iniciais/atualizadas
        setSelectedItem(props.step);
        setTitle(props.title);
        setDescription(props.description);
    }, [props.step, props.title, props.description]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const sel = selectedItem === null ? "" : String(selectedItem).trim();
        const matchedOption = options.find(opt =>
            String(opt.value).toLowerCase() === sel.toLowerCase() ||
            String(opt.label).toLowerCase() === sel.toLowerCase()
        );
        const stepValue = matchedOption ? String(matchedOption.value) : sel;

        if (!title.trim() || !stepValue) {
            setError("Preencha título, descrição e status");
            return;
        }

        const payload = {
            title: title.trim(),
            description: description.trim(),
            step: stepValue
        };

        setLoading(true);
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
            setSuccess(true);
            setTitle("");
            setDescription("");
            setSelectedItem(null);
            window.location.reload();
        } catch (err) {
            setError("Erro ao atualizar tarefa");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(e:React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await fetch(`https://pacaro-tarefas.netlify.app/api/ana-ferreira/tasks/${props.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || "Erro ao excluir tarefa");
            }

            
            window.location.reload();
        } catch (err) {
            setError("Erro ao excluir tarefa");
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <DialogContent className="bg-gray-300">
            <DialogHeader>
                <DialogTitle>Tarefa #{props.id}</DialogTitle>
                    <DialogDescription>
                        Adicione uma tarefa ao quadro.
                    </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-3">
                <Dropdown
                    options={options}
                    selectedValue={selectedItem}
                    onSelect={setSelectedItem}
                    placeholder="Status"
                />
                <label>Título</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Escreva o título da tarefa" className="bg-white border-2 border-gray-300 rounded-md p-2 w-full"/>
                <label >Descrição</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descreva a tarefa" className="bg-white border-2 border-gray-300 rounded-md p-2 w-full"/>
                   
                {error && <p className="text-red-600 text-sm">{error}</p>}
                {success && <p  className="text-green-600 text-sm">Tarefa atualizada com sucesso.</p>}

                <div>
                    <button onClick={handleDelete} className="bg-red-600 border-2 border-gray-300 rounded-md p-2 w-40 disabled:opacity-50">
                        {loading ? "Excluindo..." : "Excluir"}
                    </button>

                    <button type="submit" disabled={loading} className="bg-blue-600 border-2 border-gray-300 rounded-md p-2 w-40 disabled:opacity-50">
                        {loading ? "Atualizando..." : "Atualizar Tarefa"}
                    </button>
                </div>
            </form>
        </DialogContent>
    )
}