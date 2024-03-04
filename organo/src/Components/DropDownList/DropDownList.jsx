const DropDownList = (props) => {


    return (
        <div className="d-flex row my-4  p-2 justify-content-center">
            <label className="fs-5">{props.label}</label>
            <select className="p-4  bg-white bg-body border shadow-sm " required={props.necessary} value={props.valor} onChange={e => props.changed(e.target.value)}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })
                }
            </select>
        </div>




    )
}

export default DropDownList