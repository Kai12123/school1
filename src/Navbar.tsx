import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      Portal
      <br />
      <Link className="link" to="/home">
        Home
      </Link>
      <br />
      <Link className="link" to="/about">
        About
      </Link>
      <br />
      <Link className="link" to="/dessertrecipes">
        Dessert Recipes
      </Link>
      <br />
      <Link className="link" to="/dinnerrecipes">
        Dinner Recipes
      </Link>
      <br />
      <Link className="link" to="/lunchrecipes">
        Lunch Recipes
      </Link>
      <br />
      <Link className="link" to="/breakfastrecipes">
        Breakfast Recipes
      </Link>
    </div>
  );
}

export default Navbar;
