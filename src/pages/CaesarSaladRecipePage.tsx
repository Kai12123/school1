import { Checkbox } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

function CaesarSaladRecipePage() {
  return (
    <>
      <Navbar />

      <div className="title">The Recipe Collection</div>

      <hr />
      <div className="subtitle">Fantastic Caesar Salad</div>
      <hr />
      <img
        style={{ height: "700px" }}
        src="https://www.spendwithpennies.com/wp-content/uploads/2020/07/Caesar-Salad-SpendWithPennies-5-700x1050.jpg"
      />
      <hr />
      <div className="bigrecipecontainer">
        <div className="recipecontainer">
          <div className="recipesubtitle">INGREDIENTS</div>
          <div className="checklist">
            <div className="checkbox">
              <Checkbox />8 cups lettuce{" "}
            </div>
            <div className="checkbox">
              <Checkbox />1 cup croutons{" "}
            </div>
            <div className="checkbox">
              <Checkbox />
              1/3 cup parmesan cheese fresh shredded
            </div>
            <div className="checkbox">
              <Checkbox />1 clove garlic
            </div>
            <div className="checkbox">
              <Checkbox />1 tablespoon fresh lemon juice
            </div>
            <div className="checkbox">
              <Checkbox />1 tablespoon Worcestershire sauce
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 tablespoon dijon mustard{" "}
            </div>
            <div className="checkbox">
              <Checkbox />
              10 small capers
            </div>
            <div className="checkbox">
              <Checkbox />1 egg
            </div>
            <div className="checkbox">
              <Checkbox />2 anchovy fillets / 1 teaspoon anchovy paste
            </div>
            <div className="checkbox">
              <Checkbox />
              fresh black pepper
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 cup light olive oil
            </div>
            <div className="checkbox">
              <Checkbox />
              1/4 cup parmesan cheese grated
            </div>
          </div>
        </div>
        <div className="recipecontainer">
          <div className="recipesubtitle">NUTRITION</div>
          <div className="recipeparagraph">
            Serving: 1/6 of recipe | Calories: 245 | Carbohydrates: 7g |
            Protein: 6g | Fat: 22g | Saturated Fat: 4g | Polyunsaturated Fat: 2g
            | Monounsaturated Fat: 14g | Trans Fat: 1g | Cholesterol: 35mg |
            Sodium: 282mg | Potassium: 215mg | Fiber: 2g | Sugar: 1g | Vitamin
            A: 5579IU | Vitamin C: 4mg | Calcium: 151mg | Iron: 1mg
          </div>
        </div>
      </div>
      <hr />
      <div className="recipesubtitle">STEPS</div>
      <br />

      <div className="recipeparagraph">
        1. Begin by mixing the garlic, lemon juice, Worcestershire sauce, dijon
        mustard, capers, egg anchovy fillets, and pepper in a blender.
        <br />
        <br />
        <br />
        <br />
        2. Blend until smooth. Add in the olive oil with the blender on low
        speed.
        <br />
        <br />
        <br />
        <br />
        3. Add parmesan cheese and pulse to combine. Flavor by taste-checking.
        <br />
        <br />
        <br />
        <br />
        4. Lastly, combine the lettuce and croutons with the sauce.
        <br />
        <br />
        <br />
        <img
          className="lettuce"
          src="data:image/jpeg;base64,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"
        />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default CaesarSaladRecipePage;
