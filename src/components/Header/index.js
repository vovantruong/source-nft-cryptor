import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";
import { ethers } from "ethers";
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'
import { injected1, walletconnect, resetWalletConnector, walletlink } from '../../Helpers/connectors';
import { getContract } from '../../Helpers/contract';

const axios = require("axios");
//declare supportated chains
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
})
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
    url: "/item",
    title: "Create item",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];

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
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const [connect, setConnect] = useState(true);

  const handleSubmit = (e) => {
    alert();
  };
  // const getLibrary = (provider) => {
  //     const library = new Web3Provider(provider, 'any');
  //     library.pollingInterval = 15000;
  //     return library;
  //   };
  //connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 
	//web3react
	const writeToContractUsingWeb3React = async () => {
		try {
			const randomNumber = Math.floor(Math.random() * 100);
			const myContract = getContract(web3reactContext.library, web3reactContext.account);
			const overrides = {
				gasLimit: 230000
			};
			const response = await myContract.store(randomNumber, overrides);
			console.log(response);
			alert('write ' + randomNumber);
		} catch (ex) {
			console.log(ex);
			alert(ex);
		}
	};
  //web3react context
	const checkInfoSimple = async () => {
		try {
			console.log('web3reactContext');
			console.log(web3reactContext);
		} catch (ex) {
			console.log(ex);
		}
	};
  	//web3react walletconnect
	const connectWalletConnectSimple = async () => {
		try {
			resetWalletConnector(walletconnect);
			await web3reactContext.activate(walletconnect);
		} catch (ex) {
			console.log(ex);
		}
	};

	//web3react coinbase
	const connectCoinbaseSimple = async () => {
		try {
			await web3reactContext.activate(walletlink);
		} catch (ex) {
			console.log(ex);
		}
	};
  /*
  *
  ======================== Connect Metamask ================================ 
  *
  */

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [copyDefaultAccount, setCopyDefaultAccount] = useState("");
  const [chainId, setChanId] = useState(null);
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [iconCoin, setIconCoin] = useState("");
  let temp = "";
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [loading, setLoading] = useState(false)
  var Web3 = require('web3');
  var web3 = new Web3(window.web3.currentProvider);
  var accounts;
  var connected;
  var acc = localStorage.getItem("account")
  //Connect metamask
  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      web3 = new Web3(window.ethereum);

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((result) => {
          accountChangeHandle(result[0]);
        })
        .catch((err) => {
          setConnect(true);
          connected = true;
        });

    } else {
      console.log('Need to install MetaMask');
      // setErrorMessage('Please install MetaMask browser extension to interact');
    }
  }

  //function that is called on page load if and only if their exists and
  //item for the user accoun tin local storage
  async function connectOnLoad() {

    try {
      //here we use activate to create the connection
      // await activate(injected);
      connected = true;
      getCurrencySymbol();
    } catch (ex) {
      console.log(ex);
    }

    //we use web3.eth to get the accounts to store it in local storage
    var accounts1 = await web3.eth.getAccounts();
    acc = localStorage.setItem("account", accounts1);
  }

  //here we use a useEffect so that on page load we can check if there is
  //an account in local storage. if there is we call the connect onLoad func
  //above which allows us to presist the connection and i also call connectWalletHandler
  useEffect(() => {
    if (acc != null) {
      connectOnLoad()
    }
    connectWalletHandler()
  }, [])


  //however in the case where there is no item in local storage we use this
  //function to connect which is called when we click the connect button. its
  //essentially the same but we check if local storage is null if it is we activate
  //if its not then we disconnect. And when we disconnect we remove the acccount from local storage
  async function connectOnClick() {

    if (localStorage.getItem("account") == null) {

      setLoading(true);
      try {
        await activate(injected)
        connected = true
      } catch (ex) {
        console.log(ex)
      }
      // window.location.reload();
      var accounts1 = await web3.eth.getAccounts();
      acc = localStorage.setItem("account", accounts1);
      console.log(acc)
      setTimeout(function () {
        setLoading(false)
      }, 1600);//wait 2 seconds

    } else {

      disconnect();
      connected = false
    }

  }

  async function disconnect() {
    try {
      localStorage.removeItem("account");
    } catch (ex) {
      console.log(ex)
    }
  }
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
  //Get Balance
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

  const callbackDisconnect = (boolean) => {
    disconnect();
    setConnect(boolean);
  };

  //Get ChainID
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "net_version" }).then((result) => {
        setChanId(result);
      });
    }
    if (acc != null) {
      connectOnLoad();
      setConnect(false);
    }
  }, []);

  //Get API
  useEffect(() => {
    axios
      .get("https://chainid.network/chains.json")
      .then((response) => {
        chainList.push(response);
      })
      .catch((err) => console.log(err));
  }, []);

  //Get Symbol

  const getCurrencySymbol = () => {
    
    let data = chainList[0].data;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].chainId == chainId) {
        temp = data[i].nativeCurrency.symbol;
  }
  };
}
  //Chain Icon coin
  const chainIconCoin = () => {
    listIconCoin.forEach(e => {
      if (e.name == temp.slice(-3)) {
        setIconCoin(e.img);
      }
    })
  }
  /*
  *
  ======================== Connect Coin98 ================================ 
  *
  */
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
        </div>
        <Notification className={styles.notification} />
        <Link
          className={cn("button-small", styles.button)}
          to="/upload-variants"
        >
          Upload
        </Link>
        {connect ? (
          <button
            className={styles.connect}
            onClick={connectWalletConnectSimple}
          >
            <div className={styles.nextConnect}>Connect Wallet</div>
          </button>
        ) : (
          <User
            //address wallet
            defaultAccount={defaultAccount}
            //Balance
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
        ></button>
      </div>
    </header>
  );
};

export default Headers;
