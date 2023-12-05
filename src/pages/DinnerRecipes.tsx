import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function DinnerRecipes() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="title">The Recipe Collection</div>
      <hr />
      <table>
        <tr>
          <th className="paragraph"> Dinner Recipes</th>{" "}
        </tr>
        <tr>
          <td>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/smokedsalmonsushirecipe"
            >
              <img
                style={{ width: "800px" }}
                src="https://www.allrecipes.com/thmb/P0zUzOzkJGTm9iDvMnzdZ1ua_T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg"
              />
            </Link>
            <br />
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/smokedsalmonsushirecipe"
            >
              Smoked Salmon Sushi
            </Link>
            <div>⭐⭐⭐⭐ 23</div>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
}
export default DinnerRecipes;
