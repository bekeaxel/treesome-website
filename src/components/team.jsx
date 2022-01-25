import React from "react";
import "../styles/team.css"
import "../styles/fonts.css"

function Team() {

    return (
        <div className="team" id="team">
            <div className="container" style={{textAlign: "center"}}>
                <h1 className="header text-t">Meet the team!</h1>
                    <div class="row" style={{textAlign: "start"}}>
                        
                            <div className="card">
                                <img src="/images/mackan.png" className="team-image" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-t">Sapling Daddy</h5>
                                    <ul>
                                        <li className="card-text text-t">Co-founder</li>
                                        <li className="card-text text-t">Head of operations</li>
                                        <li className="card-text text-t">Marketing genius</li>
                                    </ul>
                                </div>
                            
                        </div>
                            <div className="card">
                                <img src="/images/axel.png" className="team-image" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-t">ultimateSEED</h5>
                                    <ul>
                                        <li className="card-text text-t">Co-founder</li>
                                        <li className="card-text text-t">Amazing developer</li>
                                        <li className="card-text text-t">Blockchain enthusiast</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                <div className="spacer-large"></div>
                <div className="discord-container">
                    <h1 className="text-t discord-text">Join our discord!</h1>
                    <div className="spacer-medium"></div>
                    <a className="btn discord-btn" role="button" href="https://discord.gg/srnZsxH72u">
                        <span className="text-t">Step in to the forest</span></a>
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

export default Team;