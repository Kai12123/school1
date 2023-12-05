import { Checkbox } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";

function SmokedSalmonSushiRecipe() {
  return (
    <>
      <Navbar />

      <div className="title">The Recipe Collection</div>

      <hr />
      <div className="subtitle">Smoked Salmon Sushi</div>
      <hr />
      <img src="https://www.allrecipes.com/thmb/P0zUzOzkJGTm9iDvMnzdZ1ua_T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg" />
      <hr />
      <div className="bigrecipecontainer">
        <div className="recipecontainer">
          <div className="recipesubtitle">INGREDIENTS</div>
          <div className="checklist">
            <div className="checkbox">
              <Checkbox />2 cups Japanese sushi rice{" "}
            </div>
            <div className="checkbox">
              <Checkbox />6 tablespoons rice wine vinegar{" "}
            </div>
            <div className="checkbox">
              <Checkbox />6 sheets nori (dry seaweed){" "}
            </div>
            <div className="checkbox">
              <Checkbox />2 tablespoons wasabi paste
            </div>
            <div className="checkbox">
              <Checkbox />8 ounces smoked salmon, cut into long strips
            </div>
            <div className="checkbox">
              <Checkbox />1 cucumber, peeled and sliced into thin rectangles
            </div>
            <div className="checkbox">
              <Checkbox />1 avocado, peeled, pitted, and sliced{" "}
            </div>
          </div>
        </div>
        <div className="recipecontainer">
          <div className="recipesubtitle">NUTRITION</div>
          <div className="recipeparagraph">
            Serving: 1/6 of recipe | Total Fat: 7g | Saturated Fat: 1g |
            Cholesterol: 9mg | Sodium: 405mg | Total Carbohydrate: 45g | Dietary
            Fiber: 4g | Total Sugars: 0g | Protein: 11g | Vitamin: C 5mg |
            Calcium: 16mg | Iron: 3mg | Potassium: 323mg |
          </div>
        </div>
      </div>
      <hr />
      <div className="recipesubtitle">STEPS</div>
      <br />

      <div className="recipeparagraph">
        1. Soak rice for 4 hours. Drain rice and cook in a rice cooker with 2
        cups of water. Rice must be dry before the next step.
        <br />
        <br />
        <br />
        <br />
        2. Mix in rice wine vinegar and spread the rice on a plate until room
        temperature.
        <br />
        <br />
        <br />
        <br />
        3. Place 1 sheet of nori on a rolling mat. Spread out a thin layer of
        rice onto the sheet.
        <br />
        <br />
        <br />
        <br />
        4. Arrange the salmon, avocado, and cucumber along the long side of the
        nori sheet.
        <br />
        <br />
        <br />
        5. Roll the sheet into a cylinder with the rolling mat. Wet your knife
        and cut the roll into 8 pieces.
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default SmokedSalmonSushiRecipe;
