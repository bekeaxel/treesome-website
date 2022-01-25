import React, { Component } from "react";
import "./styles/app.css"

import About from "./components/about";
import Roadmap from "./components/roadmap";
import Navbar from "./components/navbar";
import Minting from "./components/minting";
import Faq from "./components/faq";
import Footer from "./components/footer"
import Team from "./components/team"
import Sneakpeak from "./components/sneakpeak"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Minting />
        <About />
        <Roadmap />
        <Sneakpeak />
        <Faq />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;