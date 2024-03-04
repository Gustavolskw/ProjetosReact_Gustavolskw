import "./colaborador.css"

const Colaborador = ({ nome, imagem, cargo, corFundo }) => {


    return (
        <div className="card-Colaborador fs-2 col-3 py-5">
            <div className="header-Colaborador" style={{ backgroundColor: corFundo }}>
                <img className="img-perfil border-0 rounded-circle position-relative rounded-bottom-circle" src={imagem} alt={nome} />
            </div>
            <div className=" text-center justify-content-center rodape pb-5 bg-light">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador