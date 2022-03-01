import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import ChooseWallet from "./Wallet/index.js";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import OutsideClickHandler from "react-outside-click-handler";
import Notification from "./Notification";
import User from "./User";
// import Popup from "reactjs-popup";
import Content from "./Content.js";
import "./index.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ethers } from "ethers";
import SelectWallet from "./SelectWallet";
import Verify from "../Verify";

/** -------------------------------------------------------------
 * Import Web3, injection => Keep account of metamask wallet    -
 ---------------------------------------------------------------*/
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
/** -------------------------------------------------------------*/

const axios = require("axios");
//declare supportated chains
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
});
const nav = [
  {
    url: "/search01",
    title: "Discover",
  },
  {
    url: "/faq",
    title: "How it work",
  },
  {
    url: "/nft",
    title: "Top NFTs",
  },
  {
    url: "/item",
    title: "Create item",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];
/**
 * Api of chain list all wallet will have saving in chainList
 */
let chainList = [];

const listIconCoin = [
  {
    name: "BNB",
    img: "bnb-circle.png",
  },
  {
    name: "ETH",
    img: "etherium-circle.jpg",
  },
];

const Headers = () => {
  /**
   * All value in form-input-search
   */
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const [connect, setConnect] = useState(true);
  const handleSubmit = (e) => {
    alert();
  };
  const [visible, setVisible] = useState(true);
  //Create value open the Popup wallet connect
  const [isOpen, setIsOpen] = useState(false);
  //Function open/close Popup wallet
  const isShowPopup = (status) => {
    setIsOpen(!status);
  };

  /**
   * Verify Metamask wallet
   * Show message
   */
  const signMessage = async ({ setError }) => {
    //The text will be printed in message
    const message =
      "Welcome to WomenTech!\n\nClick to sign in and accept the WomenTech Terms.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\n\x18Wallet address:\n" +
      copyDefaultAccount;
    try {
      console.log({ message });
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      return {
        message,
        signature,
        address,
      };
    } catch (err) {
      setError(err.message);
    }
  };
  const [signatures, setSignatures] = useState([]);
  const [error, setError] = useState();
  const handleVerify = async () => {
    const sig = await signMessage({
      setError,
      // message: data.get("message")
    });
    setSignatures([...signatures, sig]);
  };
  /*
  *
  ======================== Connect Metamask ================================ 
  *
  */
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null); //Value default account of use user metamask
  const [userBalance, setUserBalance] = useState(null); //Value balance of use user metamask
  const [copyDefaultAccount, setCopyDefaultAccount] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [iconCoin, setIconCoin] = useState("");

  //Value contain symbol in chain list
  let temp = "";
  //Lib web3
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const [loading, setLoading] = useState(false);
  var Web3 = require("web3");
  var web3 = new Web3(window.web3.currentProvider);
  var connected;
  var acc = localStorage.getItem("account");

  //Function connect metamask when run wwebsite
  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      web3 = new Web3(window.ethereum);
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandle(result[0]);
        })
        .catch((err) => {
          setConnect(true);
          connected = true;
        });
    } else {
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  //function that is called on page load if and only if their exists and
  //item for the user accoun tin local storage
  async function connectOnLoad() {
    try {
      //here we use activate to create the connection
      connected = true;
    } catch (ex) {
      // console.log(ex);
    }
    //we use web3.eth to get the accounts to store it in local storage
    var accounts1 = await web3.eth.getAccounts();
    acc = localStorage.setItem("account", accounts1);
    getCurrencySymbol(chainList[0].data);
  }

  //Function onclick : Connect metamask wallet
  async function connectOnClick() {
    if (localStorage.getItem("account") == null) {
      setLoading(true);
      try {
        await activate(injected);
        connected = true;
      } catch (ex) {
        // console.log(ex)
      }
      // window.location.reload();
      var accounts1 = await web3.eth.getAccounts();
      acc = localStorage.setItem("account", accounts1);
      setTimeout(function () {
        setLoading(false);
      }, 1600); //wait 2 seconds
    } else {
      disconnect();
      connected = false;
    }
  }
  //here we use a useEffect so that on page load we can check if there is
  //an account in local storage. if there is we call the connect onLoad func
  //above which allows us to presist the connection and i also call connectWalletHandler
  useEffect(() => {
    if (acc != null) {
      connectOnLoad();
    }
    connectWalletHandler();
  }, []);

  // newAccount = IPaddress MetaMask
  const accountChangeHandle = (newAccount) => {
    setCopyDefaultAccount(newAccount);
    let newIP = newAccount.toString().slice(-4);
    setDefaultAccount(newAccount.toString().slice(0, 15) + "..." + newIP);
    getUserBalance(newAccount.toString());

    if (newAccount.toString().length < 5) {
      setConnect(true);
    }
  };
  //however in the case where there is no item in local storage we use this
  //function to connect which is called when we click the connect button. its
  //essentially the same but we check if local storage is null if it is we activate
  //if its not then we disconnect. And when we disconnect we remove the acccount from local storage
  async function disconnect() {
    try {
      localStorage.removeItem("account");
      window.location.reload();
    } catch (ex) {
      // console.log(ex)
    }
  }
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };
  window.ethereum.on("accountsChanged", accountChangeHandle);
  window.ethereum.on("chainChanged", chainChangedHandler);

  //Get ChainID
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "net_version" }).then((result) => {
        getCurrencySymbol(chainList[0].data, result);
        chainIconCoin();
      });
    }
    if (acc != null) {
      connectOnLoad();
      setConnect(false);
    }
  }, []);
  //Get API of chain list
  useEffect(() => {
    axios
      .get("https://chainid.network/chains.json")
      .then((response) => {
        chainList.push(response);
      })
      .catch();
    window.ethereum.request({ method: "eth_accounts" }).then((result) => {
      if (result.length != 0) {
        connectWalletHandler();
      } else {
        setConnect(true);
      }
    });
  }, []);

  //Get Symbol of chain list
  const getCurrencySymbol = (data, id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].chainId == id) {
        temp = data[i].nativeCurrency.symbol;
        setCurrencySymbol(data[i].nativeCurrency.symbol);
      }
    }
  };
  //Chain Icon coin
  const chainIconCoin = () => {
    listIconCoin.forEach((e) => {
      if (e.name == temp.slice(-3)) {
        setIconCoin(e.img);
      }
    });
  };

  const callbackDisconnect = (boolean) => {
    disconnect();
    setConnect(boolean);
  };

  const callbackMoreWallet = () => {
    setConnect(false);
    connectWalletHandler();
    connectOnClick();
    getCurrencySymbol(chainList[0].data);
    chainIconCoin();
  };

  const connectCoinOnClick = (boolean) => {
    if (boolean == true) {
      setConnect(false);
      connectWalletHandler();
      connectOnClick();
      getCurrencySymbol(chainList[0].data);
      chainIconCoin();
      setVisible(false);
      return;
    }
  };
  //Value open form choose wallet
  const [chooseWallet, setChooseWallet] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/header-footer/logo-womentech-purple.svg"
            srcDark="/images/header-footer/logo-womentech-purple.svg"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link className={styles.link} to={x.url} key={index}>
                {x.title}
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            className={cn("button-small", styles.button)}
            to="/upload-variants"
          >
            Upload
          </Link>
          {/* =========================== Connect NAV =========================== */}
          {connect ? (
            <button className={styles.btnConnect}>
              <SelectWallet moreWallet={callbackMoreWallet} />
            </button>
          ) : (
            <User
              defaultAccount={defaultAccount}
              userBalance={userBalance}
              className={cn(styles.user,styles.userNav)}
              copyDefaultAccount={copyDefaultAccount}
              disconnect={callbackDisconnect}
              symbol={currencySymbol}
              iconCoin={iconCoin}
            />
          )}
          {/* ===================================================================== */}
        </div>
        <Notification className={styles.notification} />
        <Link
          className={cn("button-small", styles.button)}
          to="/upload-variants"
        >
          Upload
        </Link>
        {connect ? (
          <button className={styles.btnSmall}>
            <SelectWallet moreWallet={callbackMoreWallet} />
          </button>
        ) : (
          <User
            defaultAccount={defaultAccount}
            userBalance={userBalance}
            className={styles.user}
            copyDefaultAccount={copyDefaultAccount}
            disconnect={callbackDisconnect}
            symbol={currencySymbol}
            iconCoin={iconCoin}
          />
        )}
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() =>
            visibleNav ? setVisibleNav(false) : setVisibleNav(true)
          }
        ></button>
        <Verify 
          defaultAccount={defaultAccount}
          copyDefaultAccount={copyDefaultAccount}  
        ></Verify>
      </div>
    </header>
  );
};

export default Headers;
