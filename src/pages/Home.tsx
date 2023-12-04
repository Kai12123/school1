import Navbar from "../Navbar";
function Home() {
  return (
    <>
      <div className="title">Sigma Male Recipes</div>
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
          <th className="paragraph">Newest Addition</th>
        </tr>
        <tr>
          <td>
            <img src="https://thefoodcharlatan.com/wp-content/uploads/2018/09/30-Minute-Chewy-Chocolate-Chip-Cookies-e1538077153509.jpg" />
            <br />
            <div className="paragraph">20 Minute Cookies</div>
          </td>
          <td>
            <img src="https://www.allrecipes.com/thmb/P0zUzOzkJGTm9iDvMnzdZ1ua_T8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg" />
            <div className="paragraph">Smoked Salmon Sushi</div>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Home;
