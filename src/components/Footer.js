import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto">
          <footer className="d-block d-md-flex justify-content-around pt-4 pb-1 flex-wrap mt-auto text-center font-weight-bold">
      <div className="d-flex flex-column">
        <div>
          <Link to="/">
            <img src="./Logo3.png" alt="logo" className="logo" />
          </Link>
        </div>
        <div className="mt-4">
          <a href="https://www.instagram.com/balphotoart/" className="text-dark" target="blank"><i className="fab fa-instagram fa-2x mr-3"></i></a>
          <a href="https://www.facebook.com/balphotoart" className="text-dark" target="blank"><i className="fab fa-facebook-f fa-2x"></i></a>
        </div>
      </div>
      
      <div>
        <ul className="pl-0">
          <li className="list-unstyled">
            <p>
              <i className="fab fa-whatsapp mr-2"></i>0551 959 32 89
            </p>
          </li>
          <li className="list-unstyled">
            <p>
              <i className="far fa-envelope mr-2"></i>
              balphotoart@gmail.com
            </p>
          </li>
          <li className="list-unstyled">
            <p>
              <i className="far fa-compass mr-2"></i>Fener
              Mahallesi-Muratpaşa/Antalya
            </p>
          </li>
          <li className="list-unstyled">
            <Link className="text-danger" to="/Bize Ulaşın">
              Bize Ulaşın
            </Link>
          </li>
        </ul>
      </div>
      
    </footer>
    <div className="text-center bg-danger text-light">Dizayn © <a href="https://www.eyupsercanuygur.com/" className="text-light" target="blank">Eyüp Sercan UYGUR</a></div>
    </div>

  );
};

export default Footer;
