import "./button.css"

const ButtonForm = (props) => {
    return (
        <button className="formBtn p-3 border rounded  ">
            {props.children}
        </button>
    )
}

export default ButtonForm