type InputProps= {
    label: string;
    placeholder: string;
}

export default function Input(props: InputProps) {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" className="bg-white border-2 border-gray-300 rounded-md p-2 w-full" placeholder={props.placeholder}/>
        </div>
    )
}