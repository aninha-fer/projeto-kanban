import Coluna from "../components/Coluna";
import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Header/>
            <div className="flex justify-center">
                <Coluna categoria={"Para fazer"} corFundo={"bg-red-100"} corCirculo={"bg-red-200"} corTitulo={"text-red-800"}/>

                <Coluna categoria={"Em andamento"} corFundo={"bg-yellow-100"}  corCirculo={"bg-yellow-200"} corTitulo={"text-yellow-800"}/>

                <Coluna categoria={"Pronto"} corFundo={"bg-green-100"} corCirculo={"bg-green-200"} corTitulo={"text-green-800"}/>
            </div>
        </div>
    );
}