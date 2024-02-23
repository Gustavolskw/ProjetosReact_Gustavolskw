import "./colaborador.css"

const Colaborador = () => {


    return (
        <div className="card-Colaborador fs-2 col-3 py-5">
            <div className="header-Colaborador">
                <img className="img-perfil w-25 border border-0 rounded-circle position-relative " src="https://github.com/Gustavolskw.png" alt="gustavolswkw perfil" />
            </div>
            <div className=" text-center justify-content-center rodape pb-5 bg-light">
                <h4>Gustavo</h4>
                <h5>Desenvolverdor FullStack</h5>
            </div>
        </div>
    )
}

export default Colaborador