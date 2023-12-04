import { Checkbox } from "@mui/material";
import Navbar from "../Navbar";

function CaesarSaladRecipePage() {
  return (
    <>
      <Navbar />

      <div className="title">Sigma Male Recipes</div>

      <hr />
      <div className="subtitle">Fantastic Caesar Salad</div>
      <hr />
      <img src="https://www.ihearteating.com/wp-content/uploads/2016/08/easiest-chocolate-chip-cookies.jpg" />
      <hr />
      <div className="bigrecipecontainer">
        <div className="recipecontainer">
          <div className="recipesubtitle">INGREDIENTS</div>
          <div className="checklist">
            <div className="checkbox">
              <Checkbox />1 cup dark chocolate chips
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 teaspoon kosher salt
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 teaspoon baking soda
            </div>
            <div className="checkbox">
              <Checkbox />1 3/4 all-purpose flour
            </div>
            <div className="checkbox">
              <Checkbox />1 large egg
            </div>
            <div className="checkbox">
              <Checkbox />2 teaspoons vanilla extract
            </div>
            <div className="checkbox">
              <Checkbox />
              1/4 packed brown sugar
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 cup granulated sugar
            </div>
            <div className="checkbox">
              <Checkbox />
              1/2 cup melted unsalted butter
            </div>
          </div>
        </div>
        <div className="recipecontainer">
          <div className="recipesubtitle">NUTRITION</div>
          <div className="recipeparagraph">
            Serving: 1cookie | Calories: 138kcal | Carbohydrates: 17g | Protein:
            1g | Fat: 6g | Saturated Fat: 4g | Cholesterol: 17mg | Sodium: 109mg
            | Potassium: 57mg | Sugar: 9g | Vitamin A: 130IU | Calcium: 10mg |
            Iron: 1mg
          </div>
        </div>
      </div>
      <hr />
      <div className="recipesubtitle">STEPS</div>
      <br />

      <div className="recipeparagraph">
        1. Begin by whisking the melted butter with the egg.
        <br />
        <br />
        <br />
        <br />
        2. Once homogenous, mix in the egg and vanilla.
        <br />
        <br />
        <br />
        <img src="https://www.ihearteating.com/wp-content/uploads/2016/08/easiest-chocolate-chip-cookie-process.jpg" />
        <br />
        <br />
        <br />
        <br />
        3. Add the flour, salt, and baking soda and mix until combined. Be sure
        to not overmix.
        <br />
        <br />
        <br />
        <br />
        4. Lastly, add in the chocolate chips and create small dough balls.
        <br />
        <br />
        <br />
        <img src="https://www.ihearteating.com/wp-content/uploads/2016/08/easiest-chocolate-chip-cookie-process-1.jpg" />
        <br />
        <br />
        <br />
        <br />
        5. Bake for 10 7 - 10 minutes, until the edges are baked but the center
        is still soft.
        <br />
        <br />
        <br />
        <img
          style={{ height: "600px" }}
          src="https://www.ihearteating.com/wp-content/uploads/2016/08/Easiest-Chocolate-Chip-Cookies-800-2.jpg"
        />
      </div>
    </>
  );
}

export default CaesarSaladRecipePage;
