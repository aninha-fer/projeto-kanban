import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"

export default function Header() {
    return (
        <div className="flex justify-between h-15 p-3 bg-gray-300 mb-5">
            <button>Logo</button>
            <button>Criar tarefa</button>
            <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="bg-gray-300">
                <DialogHeader>
                <DialogTitle>Criar Tarefa</DialogTitle>
                <DialogDescription>
                    Teste
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                    <label >Name</label>
                    <input  />
                </div>
            </DialogContent>
            </Dialog>
        </div>
    )
}