import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import "../styles/minting.css"

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


  function Minting() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [connected, setConnected] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });
  
    const claimNFTs = () => {
      if (blockchain.account != "") {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
          .mint(mintAmount)
          .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
          })
          .then((receipt) => {
            console.log(receipt);
            setFeedback(
              `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
      }
    };
  
    const decrementMintAmount = () => {
      let newMintAmount = mintAmount - 1;
      if (newMintAmount < 1) {
        newMintAmount = 1;
      }
      setMintAmount(newMintAmount);
    };
  
    const incrementMintAmount = () => {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 10) {
        newMintAmount = 10;
      }
      setMintAmount(newMintAmount);
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();
    }, []);
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);
  
    return (
      <div className="minting" id="mint" style={{
        backgroundImage: "url(/bg.jpg)",
        
      }}>
        <div className="spacer-small"></div>
        <div className="title">THIS IS TREESOME!</div>
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title"> MINT A TREE</h2>
            <a className="card-text" target={"_blank"} href={CONFIG.SCAN_LINK}>
              Contract adress {truncate(CONFIG.CONTRACT_ADDRESS, 15)}</a>
            
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>              
              <div>
                <div className="spacer-large"></div>
                <div className="spacer-large"></div>
                <p className="card-text">The sale has ended. You can still find {CONFIG.NFT_NAME} on {CONFIG.MARKETPLACE}</p>
                <a className="card-text market-button" href={CONFIG.MARKETPLACE_LINK}>View on Opensea</a>
              </div>
              </>
            ) : (
              <>
              <div className="spacer-medium"></div>
              <p className="card-text">{CONFIG.DISPLAY_COST} ETH / each</p>
              
              {connected || blockchain.smartContract === null ? (
                <> 
                  <div className="spacer-large"></div>
                  <div className="spacer-large"></div>
                  <button className="connect-button card-text" onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}>
                    CONNECT YOUR WALLET
                  </button>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <p className="card-text" style={{color: "crimson"}}>
                        {blockchain.errorMsg}
                      </p>
                    </>
                  ) : null}
                </>
              ) : (
                <> 
                  <div className="spacer-large"></div>
                  <div className="row">
                    <div className="counter ">
                      <button className="counter-btn card-text" style={{marginRight: "auto", marginLeft: 5}} onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}>
                        -
                      </button>
                      <p className="counter-digit card-text">{mintAmount}</p>
                      <button className="counter-btn card-text" style={{marginLeft: "auto", marginRight: 5}} onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}>
                        +
                      </button>
                    </div>
                    <button className="mint-button card-text" onClick={(e) => {
                      e.preventDefault();
                      claimNFTs();
                      getData();
                    }}>
                      Mint now
                    </button>
                  </div>
                  <div className="spacer-medium"></div>
                  <p className="card-text">Your address: {blockchain.account}</p>
                  <p className="card-text"></p>
                </>
              )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Minting;
  