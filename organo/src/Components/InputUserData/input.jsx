
import "./input.css"


const InputText = (props) => {
    const placeorlderNew = `${props.placeholder}...`


    const write = (e) => {
        props.alterado(e.target.value)

    }
    return (
        <div className="d-flex row my-4  p-2 justify-content-center">
            <label className=" fs-5">{props.label}</label>
            <input className="p-4  bg-white bg-body border  shadow-sm"
                value={props.valor} onChange={write} placeholder={placeorlderNew} required={props.necessary} />
        </div >
    )
}


export default InputText
