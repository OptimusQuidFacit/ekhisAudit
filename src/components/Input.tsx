interface props {
    type:string
    name:string
    placeholder:string
}
const Input = ({name, placeholder, type}:props) => {
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} className="rounded-lg p-3 my-3 border-2" />
        </div>
    );
}

export default Input;