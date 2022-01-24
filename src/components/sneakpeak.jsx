import React from "react";
import "../styles/fonts.css"
import "../styles/sneakpeak.css"

function Sneakpeak() {
    return (
        <div className="sneakpeak">
            <div className="container" style={{textAlign: "center"}}>
                <h1 className="header text-t">Have a sneakpeak of our shop below</h1>
                <img className="s-image" alt="" src="/images/axelmackan_forest.gif"></img>
                <img 
                    className="v-image"
                    src="/images/vine2x.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Sneakpeak;