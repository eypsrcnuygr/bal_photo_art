import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-block d-md-flex justify-content-around pt-4 pb-1 text-light flex-wrap mt-auto text-center">
      <div className="d-flex flex-column">
        <div>
          <Link to="/">
            <img src="./Logo3.jpg" alt="logo" className="logo rounded-circle" />
          </Link>
        </div>
        <div className="mt-4">
          <i className="fab fa-instagram fa-2x mr-3"></i>
          <i className="fab fa-facebook-f fa-2x"></i>
        </div>
      </div>
      
      <div>
        <div className="text-center w-100">
          <h4 className="border-bottom my-h4">İletişim</h4>
        </div>
        <ul className="pl-0">
          <li className="list-unstyled">
            <p>
              <i className="fab fa-whatsapp mr-2"></i>Tel no Yaz
            </p>
          </li>
          <li className="list-unstyled">
            <p>
              <i className="far fa-envelope mr-2"></i>
              gulsenakdag@balphotoart.com
            </p>
          </li>
          <li className="list-unstyled">
            <p>
              <i className="far fa-compass mr-2"></i>Fener
              mahallesi-Muratpaşa/Antalya
            </p>
          </li>
          <li className="list-unstyled">
            <Link className="text-light" to="/Bize Ulaşın">
              Bize Ulaşın
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
