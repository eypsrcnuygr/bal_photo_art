import { Link } from "react-router-dom";

const NavBar = (props) => {
  if (props.state === "TR") {
    return (
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
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Hamilelik"
                  state={props.state}
                >
                  Hamilelik
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Doğum"
                >
                  Doğum
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Yenidoğan"
                >
                  Yenidoğan
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Oturabilen Bebek"
                >
                  Oturabilen Bebek
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Yaş Günü"
                >
                  Yaş günü
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Mini Aile"
                >
                  Mini Aile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
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
                  Main Page
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Hamilelik"
                >
                  Maternity
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Doğum"
                >
                  Delivery
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Yenidoğan"
                >
                  Newborn
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Oturabilen Bebek"
                >
                  Sitter/Baby
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Yaş Günü"
                >
                  Birthday
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  className="nav-item text-dark font-weight-bold"
                  to="/Mini Aile"
                >
                  Mini Family
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
