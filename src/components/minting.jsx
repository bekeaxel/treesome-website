import React, { useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import "../styles/minting.css";
import "../styles/fonts.css";


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Minting() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState(``);
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

  const claimFreeNFT = () => {
    if (blockchain.account !== "") {
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalGasLimit = String(gasLimit * mintAmount);
      console.log("Gas limit: ", totalGasLimit);
      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: 0,
        })
        .once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          dispatch(fetchData(blockchain.account));
        });
    }
  };

  const claimNFTs = () => {
    if (blockchain.account !== "") {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * mintAmount);
      let totalGasLimit = String(gasLimit * mintAmount);
      console.log("Cost: ", totalCostWei);
      console.log("Gas limit: ", totalGasLimit);
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
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
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
    if (newMintAmount > 15) {
      newMintAmount = 15;
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

  const renderContent = () => {
    return (
      <div className="minting" id="mint" style={{
        backgroundImage: "url(/bg.gif)"
      }}>
      {CONFIG.SHOW_MINTCARD ? (
        <>
        <div className="mint-card">
          <h2 className="mint-card-title text-t"> MINT A TREE</h2>
          <a className="mint-card-text text-t contract-link" href={CONFIG.SCAN_LINK}>
            Contract {truncate(CONFIG.CONTRACT_ADDRESS, 15)}</a>
          
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>              
            <div>
              <p className="mint-card-text text-t">The sale has ended. You can still find {CONFIG.NFT_NAME} on {CONFIG.MARKETPLACE}</p>
              <a className="mint-card-text market-button text-t" href={CONFIG.MARKETPLACE_LINK}>View on Opensea</a>
            </div>
            </>
          ) : (
            <>
            <p className="mint-card-text text-t">{CONFIG.DISPLAY_COST} ETH / each</p>
            
            {blockchain.smartContract === null ? (
              <> 
                <button className="connect-button mint-card-text text-t" onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}>
                  CONNECT
                </button>
                {blockchain.errorMsg !== "" ? (
                  <>
                    <p className="mint-card-text" style={{color: "crimson"}}>
                      {blockchain.errorMsg}
                    </p>
                  </>
                ) : null}
              </>
            ) : (
              <> 
              
                <div className="row counter">
                  <div className="col-5" >
                    <button className="counter-btn mint-card-text" style={{color: "#e1e4c9", float: "right", textAlign: "center"}} onClick={(e) => {
                      e.preventDefault();
                      decrementMintAmount();
                    }}>
                      -
                    </button>
                  </div>
                  <div className="col-2">
                    <p className="counter-digit mint-card-text text-t">{mintAmount}</p>
                  </div>
                  <div className="col-5" >
                    <button className="counter-btn mint-card-text" style={{color: "#e1e4c9", float: "left", textAlign: "center"}} onClick={(e) => {
                      e.preventDefault();
                      incrementMintAmount();
                    }}>
                      +
                    </button>
                  </div>
                </div>
                  <div className="row">
                    <button className="mint-button mint-card-text text-t" onClick={(e) => {
                      e.preventDefault();
                      claimNFTs();
                      getData();
                    }}>
                      Mint now
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <p className="mint-card-text" style={{color: "crimson"}}>
                          {blockchain.errorMsg}
                        </p>
                      </>
                    ) : null}
                  </div>
                  <p className="text-t mint-card-text" style={{margin: "0"}}>Four leaf clover? Click below</p>
                  <div className="row">
                    <button className="free-mint mint-card-text text-t" onClick={(e) =>{
                      e.preventDefault();
                      claimFreeNFT();
                      getData();
                    }}>
                      Free Mint
                    </button>
                  </div>
                { feedback !== '' ? (
                  <>
                    <p className="mint-card-text">{feedback}</p>
                  </>
                ) : null
                }
              </>
            )}
            </>
          )}
        </div>
        </>
        ) : (
          <>
            <h1 className="title text-t">We're planting half a million trees, <br></br>together!</h1>
          </>
        ) 
        }
      </div>
    );
  }  
  return renderContent();

}

export default Minting;
  