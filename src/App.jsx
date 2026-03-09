import React, { useState } from "react";
import logo from "./assets/logo.png";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      {/* <nav className='navbar'>
        <div className='container navbar-flex'>
          <a href='./index.html' className='logo'>
            <img src={logo} alt='' />
          </a>
          <div className='main-menu'>
            <ul className='main-menu-list'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#tours'>Tours</a>
              </li>
            </ul>

            <ul className='main-menu-icons'>
              <li>
                <a
                  href='http://www.facebook.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fa-brands fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  href='http://www.instagram.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fa-brands fa-instagram'></i>
                </a>
              </li>
              <li>
                <a
                  href='http://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fa-brands fa-twitter'></i>
                </a>
              </li>
            </ul>
          </div>

          <div className='mobile-menu'>
            <div className='mobile-menu-toggle'>
              <i className='fa-solid fa-bars'></i>
            </div>
            <div className='mobile-menu-items'>
              <ul className='mobile-menu-list'>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#services'>Services</a>
                </li>
                <li>
                  <a href='#tours'>Tours</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
