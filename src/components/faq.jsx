import React from "react";
import "../styles/faq.css";
import "../styles/fonts.css"

function Faq() {
    return (
        <div className="faq">
            <div className="container">
                <h1 className="header text-t">Frequently Asked Questions</h1>

                <div className="accordion" id="faq">
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What is Treesome NFT?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Well hello! Welcome to our NFT Project, Treesome. We are 10 000 randomly generated NFTs floating around in the Ethereum blockchain (ERC-721), handmade with love by us developers. Treesome has been an ongoing project for months and we have many exciting things planned. 
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Who are we?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Treesome is made by a cool, charming, good-looking, talented and humble group of close friends who are passionate about NFTs and crypto. We love to innovate and create, and aspire to do something unique. We believe the community is the most imporant part of a project, and will always try to prioritize this.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Why should I mint a Treesome NFT?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Our goal is to build an amazing and supportive community which works together to achieve great things. We want everyone, from every background, from every part of the world, to feel safe and welcome. We will always work on adding value to holders and will be creative with it. Not only will we host events, giveaways and competitions, but we will also always listen and take into consideration what the community wants.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            Treesome? Threesome? What's up with the name?
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faq">
                        <div className="accordion-body">
                            A combination of the word wholesome and, well... tree. Or something like that atleast.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            When is mint? How much will each mint cost?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Minting date will be done in early 2022. The minting cost is still TBA.
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Faq;