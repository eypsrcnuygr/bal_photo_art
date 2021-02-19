import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light my-navbar">
  <div
    className="collapse navbar-collapse d-flex justify-content-center"
    id="navbarSupportedContent"
  >
    
    <div className="collapse navbar-collapse text-center d-flex justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle font-weight-bold my-link text-light"
            to="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Kategoriler
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/Hamilelik">
              Hamilelik
            </Link>
            <Link className="dropdown-item" to="/Doğum">
              Doğum
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/Yenidoğan">
              Yenidoğan
            </Link>
            <Link className="dropdown-item" to="/Oturabilen Bebek">
              Oturabilen Bebek
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/Yaş Günü">
              Yaş günü
            </Link>
            <Link className="dropdown-item" to="/Mini Aile">
              Mini Aile
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item font-weight-bold" to="/">
              Ana Sayfa
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
)

export default NavBar;