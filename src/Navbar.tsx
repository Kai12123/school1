import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      Portals
      <br />
      <Link className="link" to="/home">
        Home
      </Link>
      <br />
      <Link className="link" to="/about">
        About
      </Link>
      <br />
      <Link className="link" to="/20mincookies">
        20 Minute Cookies
      </Link>
      <br />
      <Link className="link" to="/fantasticcaesarsalad">
        Fantastic Caesar Salad
      </Link>
    </div>
  );
}

export default Navbar;
