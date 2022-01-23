import React from "react";
import "../styles/faq.css";
import "../styles/fonts.css"

function Faq() {
    return (
        <div className="faq">

{/* <div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Section 1
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Section 2
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Section 3
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
            <div className="container" id="faq" style={{textAlign: "center"}}>
                {/* <div className="spacer-large"></div>   */}
                <h1 className="header text-t">Frequently Asked Questions</h1>
                <div className="accordion">
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed text-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What is Treesome NFT?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Welcome to our NFT Project, Treesome. We are 10 000 randomly generated NFTs 
                            floating around in the Ethereum blockchain (ERC-721), handmade with love by us developers. 
                            Treesome has been an ongoing project for months and we have many exciting things planned. 
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Who are we?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Treesome is made by a cool, charming, good-looking, talented and humble group of close friends who are passionate
                            about NFTs and crypto. We love to innovate and create, and aspire to do something unique. We believe the community 
                            is the most imporant part of a project, and will always try to prioritize this.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed text-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Why should I mint a Treesome NFT?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Our goal is to build an amazing and supportive community which works together to achieve great things. 
                            We want everyone, from every background, from every part of the world, to feel safe and welcome. 
                            We will always work on adding value to holders and will be creative with it. 
                            Not only will we host events, giveaways and competitions, but we will also always listen and take 
                            into consideration what the community wants.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed text-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
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
                        <button className="accordion-button collapsed text-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            When is mint? How much will each mint cost?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq">
                        <div className="accordion-body">
                            Minting date will be done in early 2022. The minting cost is still TBA.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed text-t" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                            How is Treesome going to help the environment?
                        </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faq">
                        <div className="accordion-body">
                            As specified in the roadmap, when 50% of all NFT's have been minted, a large sum will be donated to a forest charity.
                            The charity will be chosen 100% by the Treesome community! Ain't that nice?
                        </div>
                        </div>
                    </div>
                </div>
                <img 
                    className="v-image"
                    src="/images/vine.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Faq;