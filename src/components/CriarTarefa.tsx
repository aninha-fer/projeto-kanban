
import { Select, SelectContent, SelectItem, SelectTrigger } from "@radix-ui/react-select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"

export default function CriarTarefa() {
    return (
        <div>
            <Dialog>
            <DialogTrigger>Nova Tarefa</DialogTrigger>
            <DialogContent className="bg-gray-300">
                <DialogHeader>
                    <DialogTitle>Criar Tarefa</DialogTitle>
                        <DialogDescription>
                            Teste
                        </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                    <label>Nome</label>
                    <input  type="text"/>
                    <label >Descrição</label>
                    <textarea  />
                    {/* <Select defaultValue="apple">
                        <SelectTrigger />
                        <SelectContent>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="orange">Orange</SelectItem>
                        </SelectContent>
                    </Select> */}

                    
                </div>
            </DialogContent>
            </Dialog>
        </div>
    )
}