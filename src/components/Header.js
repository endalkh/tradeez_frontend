import { Link } from "react-router-dom";
import logo from "../assests/images/logo.png";

const Header = () => {
  return (
    <header className="header d-flex justify-content-lg-between justify-content-md-between">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="d-flex">
        <Link to="/login" className="btn btn-light">
          Login
        </Link>
        <Link to="/signup" className="btn btn-dark">
          Supplier{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
