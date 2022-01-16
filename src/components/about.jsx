import React from "react";
import "../styles/about.css"
import "../styles/fonts.css"



function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <div class="atropos my-atropos">
   
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <img
                      className="img-fluid rounded mb-4 mb-lg-0"
                      src="/config/images/pot.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-5">
            <h1 className="text-t header">About this project</h1>
            <p className="text-t">
            Well hello! Welcome to our NFT Project, Treesome. 
            Treesome are a private collection of 10 000 randomly generated NFTs peacefully living on 
            the Ethereum blockchain as ERC-721 tokens, 
            handmade with love by us developers. 
            Treesome has been an ongoing project for months and we have many exciting things planned. 
            Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;