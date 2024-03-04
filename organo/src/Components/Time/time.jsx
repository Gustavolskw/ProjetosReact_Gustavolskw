import Colaborador from "../colaborador/colaborador";
import "./time.css";


const Time = (props) => {

    const backgroundColor = { backgroundColor: props.corSecundaria }
    const borderColor = { borderColor: props.corPrimnario };
    return (

        (props.colaboradores.length > 0) ? <section className="time-section text-center p-3 mx-0 d-flex row text-center align-content-center " style={backgroundColor} >
            <h3 style={borderColor} className="time-title fs-3 d-inline-block pb-2 pt-5 border-3">{props.nome}  </h3>
            <div className='colaboradores d-flex gap-4'>
                {props.colaboradores.map(colaborador => <Colaborador corFundo={props.corPrimnario} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section >
            : ""
    )

};

export default Time;