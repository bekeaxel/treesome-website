import React from "react";
import "../styles/about.css"
import "../styles/fonts.css"



function About() {
  return (
    <div className="about">
      <div className="container" style={{textAlign: "center"}}>
        <div className="row align-items-center my-5" >
          <div className="col-lg-7">
            <img
              className="img-fluid a-image rounded mb-4 mb-lg-0"
              src="/images/collage.jpg"
              alt=""
            />
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