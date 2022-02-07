import React from "react";
import "../styles/footer.css" 
import "../styles/fonts.css"

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 fixed-size footer-bg-color">
        <div class="container" style={{textAlign: "center"}}>
          <img src="/favicon.ico" alt="" className="icon"/>
          <p class="m-0 text-center text-t">
            Copyright &copy; Treesome NFT 2022
          </p>
          <ul className="sm-icons-footer">
            <li>
              <a className="" style={{padding: 4, margin: "4px"}} href="https://twitter.com/TreesomeNFT">
                <img className="sm-image" alt="" src="/images/twitter.png" width="40" height="40"></img>
              </a>
            </li>
            <li>
              <a className="" style={{padding: 4, margin: "4px"}} href="https://opensea.io/TreesomeNFT">
                <img className="sm-image" alt="" src="/images/openseaIcon.png" width="40" height="40"></img>
              </a>
            </li>
            <li>
              <a className="" style={{padding: 4, margin: "4px"}} href="https://discord.gg/TreesomeNFT">
                <img className="sm-image" alt="" src="/images/discordIcon.png" width="40" height="40"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;