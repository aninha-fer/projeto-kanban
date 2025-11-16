import CriarTarefa from "./CriarTarefa";


export default function Header() {
    return (
        <div className="flex justify-between h-15 p-3 bg-white mb-5 border-1 shadow">
            <button>Logo</button>
            <CriarTarefa />
            
        </div>
    )
}