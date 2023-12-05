import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function BreakfastRecipes() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="title">The Recipe Collection</div>
      <hr />
      <table>
        <tr>
          <th className="paragraph">Breakfast Recipes</th>{" "}
        </tr>
        <tr>
          <td>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/classicomelette"
            >
              <img
                style={{ height: "800px" }}
                src="https://natashaskitchen.com/wp-content/uploads/2022/02/Egg-Omelette-7-728x1091.jpg"
              />
            </Link>
            <br />
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/classicomelette"
            >
              Classic Omelette
            </Link>
            <div>⭐⭐⭐⭐ 11</div>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
}
export default BreakfastRecipes;
