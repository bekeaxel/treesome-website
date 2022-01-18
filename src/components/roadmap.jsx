import React from "react";
import "../styles/roadmap.css"
import "../styles/fonts.css"

function Roadmap() {


    return (
        <div className="roadmap" id="roadmap">

            <div class="container">
                <h1 className="header text-t">ROADMAP v1</h1>
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline">
                                <a class="timeline-content">
                                    <div class="timeline-icon"><p class="text-t icon">25%</p></div>
                                    
                                    <p class="description text-t">
                                        25 unique Treesome giveaways for holders only! Make sure to mint your TREE
                                    </p>
                                </a>
                            </div>
                            <div class="timeline">
                                <a class="timeline-content">
                                    <div class="timeline-icon"><p class="text-t icon">50%</p></div>
                                    <p class="description text-t">
                                        A large sum will be donated to a forest charity, which will be chosen by the community. Join our amazing community in our discord to be involved!
                                    </p>
                                </a>
                            </div>
                            <div class="timeline">
                                <a class="timeline-content">
                                    <div class="timeline-icon"><p class="text-t icon">75%</p></div>
                                    <p class="description text-t">
                                        MAYC NFT giveaway, yes you heard it MAYC. Holders will have exclusive access to our alpha channel
                                    </p>
                                </a>
                            </div>
                            <div class="timeline">
                                <a class="timeline-content">
                                    <div class="timeline-icon"><p class="text-t icon">100%</p></div>
                                    <p class="description text-t">
                                        A new companion collection will be created for you to mint [will be free for holders]    
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <h1 className="header text-t">ROADMAP LAUNCH</h1>
                <div className="row">
                    <div className="col-2">
                        <p className="text-t row-name">10%</p>
                    </div>
                    <div className="col-8">
                        <p className="text-t row-text">something is happening</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p className="text-t row-name">20%</p>
                    </div>
                    <div className="col-8">
                        <p className="text-t row-text">something is happening</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p className="text-t row-name">30%</p>
                    </div>
                    <div className="col-8">
                        <p className="text-t row-text">something is happening</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p className="text-t row-name">50%</p>
                    </div>
                    <div className="col-8">
                        <p className="text-t row-text">something is happening</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p className="text-t row-name">75%</p>
                    </div>
                    <div className="col-8">
                        <p className="text-t row-text">something is happening</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p className="text-t row-name">100%</p>
                    </div>
                    <div className="col-8">
                        <p className="text-t row-text">something is happening</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Roadmap;