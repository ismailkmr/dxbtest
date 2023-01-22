import logo from "./logo.svg";
import "./Style.css";
import ico1 from "./images/1.png";
import ico2 from "./images/2.png";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <ul className="menu">
          <li className="activeLi">
            <a href="">Home Furniture</a>
          </li>
          <li>
            <a href="">Corporate Furniture</a>
          </li>
          <li>
            <a href="">Hospital Furnitures</a>
          </li>
          <li>
            <a href="">Sound Proof</a>
          </li>
        </ul>
        <div className="subMenu"></div>
      </header>
      <div className="content">
        <ul>
          <li>
            <img src={ico1} />
            <span>CRESCENT SWIVEL CHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico2} />
            <span>MILIE CHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico1} />
            <span>PLEATED SWIVERL CHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico2} />
            <span>LEATHER ARMCHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico1} />
            <span>CRESCENT SWIVEL CHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico2} />
            <span>PLEATED SWIVERL CHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico1} />
            <span>LEATHER ARMCHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
          <li>
            <img src={ico2} />
            <span>MILIE CHAIR</span>
            <p>Lorem ipsum dolor sit amet, consecture adispicing elit. Etiam</p>
            <button>Get a quote</button>
          </li>
        </ul>
      </div>
      <div className="wrapFoot">
        <button>Discover</button>
      </div>
      <div className="footerCont">
        <div className="footerContRight">
          <div className="div1">
          <span>"Real comfirt, visual and physical,<br></br> is vital to every room."<br></br>
          - Mark Hampton
          </span></div>
        </div>
      </div>

    </div>
  );
}

export default Home;
