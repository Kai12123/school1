import { Checkbox } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ClassicOmelette() {
  return (
    <>
      <Navbar />

      <div className="title">The Recipe Collection</div>

      <hr />
      <div className="subtitle">Classic Omelette</div>
      <hr />
      <img
        style={{ height: "700px" }}
        src="https://natashaskitchen.com/wp-content/uploads/2022/02/Egg-Omelette-7-728x1091.jpg"
      />
      <hr />
      <div className="bigrecipecontainer">
        <div className="recipecontainer">
          <div className="recipesubtitle">INGREDIENTS</div>
          <div className="checklist">
            <div className="checkbox">
              <Checkbox />2 eggs{" "}
            </div>
            <div className="checkbox">
              <Checkbox />
              Kosher Salt{" "}
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 Tablespoon Butter{" "}
            </div>
            <div className="checkbox">
              <Checkbox />
              Cheese
            </div>
          </div>
        </div>
        <div className="recipecontainer">
          <div className="recipesubtitle">NUTRITION</div>
          <div className="recipeparagraph">
            Serving: 1 omelette | Total Fat: 8g | Saturated Fat: 1g |
            Cholesterol: 40mg | Sodium: 194mg | Total Carbohydrate: 18g |
            Dietary Fiber: 4g | Total Sugars: 0g | Protein: 14g | Vitamin: C 0mg
            | Calcium: 28mg | Iron: 3mg | Potassium: 121mg |
          </div>
        </div>
      </div>
      <hr />
      <div className="recipesubtitle">STEPS</div>
      <br />

      <div className="recipeparagraph">
        1. In a separate bowl, beat the eggs until the whites and yolk are
        combined. Add a pinch of salt.
        <br />
        <br />
        <br />
        <br />
        2.On medium heat, melt the butter and add the eggs. Set heat to low.
        <br />
        <br />
        <br />
        <br />
        3. Once cooked on one side, flip using a spatula.
        <br />
        <br />
        <br />
        <br />
        4. Add the cheese and any other toppings and fold.
        <br />
        <br />
        <br />
        5. Roll the sheet into a cylinder with the rolling mat.
        <br />
        Wet your knife and cut the roll into 8 pieces.
        <br />
        <br />
        <img
          style={{ height: "600px" }}
          src="https://natashaskitchen.com/wp-content/uploads/2022/02/Egg-Omelette-3-728x1091.jpg"
        />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default ClassicOmelette;
