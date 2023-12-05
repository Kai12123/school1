import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function LunchRecipes() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="title">The Recipe Collection</div>
      <hr />
      <table>
        <tr>
          <th className="paragraph"> Lunch Recipes</th>{" "}
        </tr>
        <tr>
          <td>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/fantasticcaesarsalad"
            >
              <img
                style={{ height: "800px" }}
                src="https://www.spendwithpennies.com/wp-content/uploads/2020/07/Caesar-Salad-SpendWithPennies-5-700x1050.jpg"
              />
            </Link>
            <br />
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/fantasticcaesarsalad"
            >
              Fantastic Caesar Salad
            </Link>
            <div>⭐⭐⭐⭐ 23</div>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
}
export default LunchRecipes;
