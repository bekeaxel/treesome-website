import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll"
import "../styles/navbar.css"
import "../styles/fonts.css"

export default class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="navigation" id="nav">
        <nav className="navbar navbar-expand navbar-bg-color navbar-dark">
          <div className="container">
            <a className="navbar-brand text-t" href="/">
              <img src="/favicon.ico" alt="" width="50" height="50" className="d-inline-block " />
              Treesome
            </a>
            <div>
              <ul className="navbar-nav ml-auto">
                <div className="link-container">
                  <li className="nav-item link text-t">
                  {/* till About */}
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item link text-t">
                    <Link
                      activeClass="active"
                      to="roadmap"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className="nav-item link text-t">
                    <Link 
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                    >
                      Faq
                      </Link>
                  </li>
                </div>
                <ul className="navbar-nav" style={{alignItems: "center"}}>
                  <li className="nav-item">
                    <a className="nav-link" style={{padding: 4}} href= "https://twitter.com/TreesomeNFT">
                      <img alt="" src="/config/images/twitter.png" width="20" height="20"></img>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" style={{padding: 4}} href="https://opensea.io/TreesomeNFT">
                      <img alt="" src="/config/images/openseaIcon.png" width="20" height="20"></img>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav> 
      </div>
    );
  }
}
