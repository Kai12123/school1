import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieRecipePage from "./pages/CookieRecipePage";
import Home from "./pages/Home";
import CaesarSaladRecipePage from "./pages/CaesarSaladRecipePage";
import About from "./pages/About";
import DessertRecipes from "./pages/DessertRecipes";
import DinnerRecipes from "./pages/DinnerRecipes";
import BreakfastRecipes from "./pages/BreakfastRecipes";
import LunchRecipes from "./pages/LunchRecipes";
import SmokedSalmonSushiRecipe from "./pages/SmokedSalmonSushiRecipe";
import ClassicOmelette from "./pages/ClassicOmelette";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="20mincookies" element={<CookieRecipePage />} />
        <Route path="dessertrecipes" element={<DessertRecipes />} />
        <Route path="dinnerrecipes" element={<DinnerRecipes />} />
        <Route path="breakfastrecipes" element={<BreakfastRecipes />} />
        <Route path="lunchrecipes" element={<LunchRecipes />} />
        <Route
          path="fantasticcaesarsalad"
          element={<CaesarSaladRecipePage />}
        />
        <Route
          path="smokedsalmonsushirecipe"
          element={<SmokedSalmonSushiRecipe />}
        />
        <Route path="classicomelette" element={<ClassicOmelette />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
