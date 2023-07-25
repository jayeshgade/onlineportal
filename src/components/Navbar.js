import './navbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar() {
  const [state, setState] = useState("display");
  const [state1, setState1] = useState("");
  function display(){
    setState("hidden");
    setState1("display");
  }

  return (
    <>
      <div className='left'></div>
      <div className='right' style={{visibility:state}}><img src='/images/2-removebg-preview.png'></img></div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand marginleftt" to="/" onClick={state1}><img src="/images/Akrutive Logo.png" width={95} height={95}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll marginrightt" >
              {/* ms-auto manje margin start auto. manun te right la gela */}
              <li className="nav-item">
                <Link className="nav-link active me-2" aria-current="page" to="/" onClick={state1}>Home</Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link" to="/view360" onClick={display}>360 Viewer</Link>
              </li>
              {/* <li className="nav-item me-2">
                <Link className="nav-link" to="/design2d3d" onClick={display}>2D & 3D Design</Link>
              </li> */}
              <li className="nav-item me-2">
                <Link className="nav-link" to="/aboutus" onClick={display}>AboutUs</Link>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="/gallery" data-testid="gallery-link" onClick={display}>Gallery</a>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link" to="/contactus" onClick={display}>ContactUs</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
