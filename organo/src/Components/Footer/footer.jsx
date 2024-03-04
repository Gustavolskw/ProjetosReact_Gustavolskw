import "./footer.css"

const Footer = (props) => {


  return (
    <footer className="Footer mx-0 py-md-5 px-5 "  >
      <div className="row d-flex text-center justify-content-center align-items-center gap-2">
        <div className="section-icons col-3 d-flex justify-content-center">
          <a className="text-white fs-5" href="https://www.facebook.com/?locale=pt_BR"><i className="bi bi-facebook"></i></a>
          <a className="text-white fs-5" href="https://twitter.com/"> <i className="bi bi-twitter-x"></i></a>
          <a className="text-white fs-5" href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a>
        </div>
        <div className="col-4">
          <img className="Imagem-Logo" src="/img/logo.png" alt="Img Logo Organo" />
        </div>
        <div className="col-4 pt-2">
          <p className="text-footer">Desenvolvido Por Alura</p>
        </div>
      </div>



    </footer >
  )
};

export default Footer;