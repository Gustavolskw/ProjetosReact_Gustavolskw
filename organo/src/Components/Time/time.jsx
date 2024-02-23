import Colaborador from "../colaborador/colaborador";
import "./time.css";


const Time = (props) => {

    const backgroundColor = { backgroundColor: props.corSecundaria }
    const borderColor = { borderColor: props.corPrimnario };
    return (

        <section className="time-section text-center p-3 mx-0 d-flex row text-center align-content-center justify-content-between" style={backgroundColor}>
            <h3 style={borderColor} className="time-title fs-3 d-inline-block pb-2 pt-5 border-3">{props.nome}  </h3>
            <Colaborador></Colaborador>
            <Colaborador></Colaborador>
            <Colaborador></Colaborador>
            <Colaborador></Colaborador>
        </section >
    )

};

export default Time;