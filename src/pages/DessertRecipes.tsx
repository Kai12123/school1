import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function DessertRecipes() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="title">The Recipe Collection</div>
      <hr />
      <table>
        <tr>
          <th className="paragraph"> Dessert Recipes</th>{" "}
        </tr>
        <tr>
          <td>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/20mincookies"
            >
              <img src="https://thefoodcharlatan.com/wp-content/uploads/2018/09/30-Minute-Chewy-Chocolate-Chip-Cookies-e1538077153509.jpg" />
            </Link>
            <br />
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/20mincookies"
            >
              20 Minute Cookies
            </Link>
            <div>⭐⭐⭐⭐⭐ 14</div>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
}

export default DessertRecipes;
