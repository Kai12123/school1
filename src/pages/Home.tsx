import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <div className="title">The Recipe Collection</div>
      <Navbar />
      <hr />
      <div className="welcome">
        Welcome to our collection of the best recipes across the internet.
        <br />
        Click on any of the portals or browse here.
      </div>
      <br />
      <br />
      <br />
      <div className="subtitle">Featured Recipes</div>
      <hr />
      <br />
      <br />
      <table>
        <tr>
          <th className="paragraph">Highest Rated</th>{" "}
          <th className="paragraph">New Additions</th>
        </tr>
        <tr>
          <td>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/20mincookies"
            >
              <img src="https://thefoodcharlatan.com/wp-content/uploads/2018/09/30-Minute-Chewy-Chocolate-Chip-Cookies-e1538077153509.jpg" />
            </Link>
            <br />
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/20mincookies"
            >
              20 Minute Cookies
            </Link>
            <div>⭐⭐⭐⭐⭐ 14</div>
          </td>
          <td>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/smokedsalmonsushirecipe"
            >
              <img src="https://www.allrecipes.com/thmb/P0zUzOzkJGTm9iDvMnzdZ1ua_T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg" />
            </Link>
            <Link
              style={{ color: "black", fontSize: 50 }}
              className="link"
              to="/smokedsalmonsushirecipe"
            >
              Smoked Salmon Sushi
            </Link>{" "}
            <div>⭐⭐⭐⭐⭐ 2</div>
          </td>
        </tr>
        <tr>
          <th
            className="paragraph
            "
          >
            Beginner Recipe
          </th>
          <th className="paragraph">Follow along with a video!</th>
        </tr>
        <tr>
          <td>
            <Link
              className="link"
              to="/classicomelette"
              style={{ color: "black", fontSize: 50 }}
            >
              <img
                style={{ height: "400px" }}
                src="https://natashaskitchen.com/wp-content/uploads/2022/02/Egg-Omelette-7-728x1091.jpg"
              />
            </Link>
            <div>
              <Link
                className="link"
                to="/classicomelette"
                style={{ color: "black", fontSize: 50 }}
              >
                {" "}
                Classic Omelette
              </Link>
            </div>
            <div>⭐⭐⭐⭐ 11</div>
          </td>
          <td>
            <iframe
              width="728"
              height="410"
              src="https://www.youtube.com/embed/9feEKoL0YWQ"
              title="Easy Omelette Recipe (4 Ways)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </td>
        </tr>
      </table>
      <Footer />
    </>
  );
}

export default Home;
