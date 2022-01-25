import React from "react";
import "../styles/about.css"
import "../styles/fonts.css"



function About() {
  return (
    <div className="about">
      <div className="container" style={{textAlign: "center"}}>
        <img 
          className="v-image"
          src="/images/vine2x.png"
          alt=""
        />
        <div className="row align-items-center my-5" >
          <div className="col-md-5">
            <h1 className="text-t header">A real difference, in the real world!</h1>
            <p className="text-t a-text">
            Treesome is an NFT project focused on fighting deforestation through planting 
            trees and donating to charities. Our goal is to plant half a million trees and 
            make an impact on the world, and we need your help. <br></br> <br></br>
            Helping our planet is our priority, but we believe our community is equally important, 
            as we would be nothing without it. We always listen and take into consideration what our 
            supporters want us to do, and want everyone to feel safe and welcome. Let's make a difference, together.
            </p>
          </div> 
          <div className="col-md-7">
            <img
              className="img-fluid a-image rounded mb-4 mb-lg-0"
              src="/images/collage.jpg"
              alt=""
            />
          </div>
        </div>
        <img 
          className="v-image"
          src="/images/vine2x.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;