import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse d-flex justify-content-center"
      id="navbarSupportedContent"
    >
      <div
        className="collapse navbar-collapse d-lg-flex justify-content-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
        <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/">
              Ana Sayfa
            </Link>
          </li>
          <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/Hamilelik">
              Hamilelik
            </Link>
          </li>
          <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/Doğum">
              Doğum
            </Link>
          </li>
          <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/Yenidoğan">
              Yenidoğan
            </Link>
          </li>
          <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/Oturabilen Bebek">
              Oturabilen Bebek
            </Link>
          </li>
          <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/Yaş Günü">
              Yaş günü
            </Link>
          </li>
          <li className="mx-2">
            <Link className="nav-item text-dark font-weight-bold" to="/Mini Aile">
              Mini Aile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
