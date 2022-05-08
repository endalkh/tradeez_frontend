import logo from "../assests/images/logo.png";

const Header = () => {
  return (
    <header className="header d-flex justify-content-lg-between justify-content-md-between">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="d-flex">
        <button type="button" className="btn btn-light">
          Login
        </button>
        <button type="button" className="btn btn-dark">
          Supplier{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
