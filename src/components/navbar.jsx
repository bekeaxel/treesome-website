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
        <nav className="navbar navbar-expand-sm navbar-bg-color navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-t" href="/">
              <img src="/favicon.ico" alt="" width="50" height="50" className="d-inline-block " />
              <div className="brand text-t">Treesome</div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item link-t text-t">
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={false}
                      offset={0}
                      duration={1000}
                    >
                      <a className="test">About</a>
                    </Link>
                  </li>
                  <li className="nav-item link-t text-t">
                    <Link
                      activeClass="active"
                      to="roadmap"
                      spy={true}
                      smooth={false}
                      offset={0}
                      duration={10000}
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className="nav-item link-t text-t">
                    <Link 
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={false}
                      offset={0}
                      duration={10000}
                      isDynamic={true}
                    >
                      Faq
                      </Link>
                  </li>
                
                <ul className="navbar-nav me-auto sm-icons" style={{alignItems: "center"}}>
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
                  <li className="nav-item">
                    <a className="nav-link" style={{padding: 4}} href="https://discord.gg/srnZsxH72u">
                      <img alt="" src="/config/images/discordIcon.png" width="20" height="20"></img>
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
