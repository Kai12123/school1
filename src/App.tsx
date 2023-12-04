import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieRecipePage from "./pages/CookieRecipePage";
import Home from "./pages/Home";
import CaesarSaladRecipePage from "./pages/CaesarSaladRecipePage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="20mincookies" element={<CookieRecipePage />} />
        <Route
          path="fantasticcaesarsalad"
          element={<CaesarSaladRecipePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
