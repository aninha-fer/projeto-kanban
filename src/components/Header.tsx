import CriarTarefa from "./CriarTarefa";
import logo from '../assets/logo.svg';


export default function Header() {
    return (
        <div className="flex justify-between h-15 p-3 bg-white mb-5 border-1 shadow items-center">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-8"/>
                <p className="flex gap-1 text-orange-300 font-bold text-xl">Did you <p className="text-orange-400">do</p> it?</p>
            </div>
            <CriarTarefa />
            
        </div>
    )
}